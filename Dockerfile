# syntax = docker/dockerfile:1
ARG RUBY_VERSION=3.1.2
FROM ruby:$RUBY_VERSION-slim as base

WORKDIR /rails

ENV RAILS_ENV=production \
    BUNDLE_DEPLOYMENT=1 \
    BUNDLE_PATH="/usr/local/bundle" \
    BUNDLE_WITHOUT="development test"

# Throw-away build stage
FROM base as build

RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential curl git libpq-dev libvips node-gyp pkg-config python-is-python3

ARG NODE_VERSION=23.10.0
ARG YARN_VERSION=1.22.21
ENV PATH=/usr/local/node/bin:$PATH

RUN curl -sL https://github.com/nodenv/node-build/archive/master.tar.gz | tar xz -C /tmp/ && \
    /tmp/node-build-master/bin/node-build "$NODE_VERSION" /usr/local/node && \
    npm install -g yarn@$YARN_VERSION && \
    rm -rf /tmp/node-build-master

RUN gem update --system 3.3.22

# Install Ruby and JS deps first
COPY Gemfile Gemfile.lock ./
RUN bundle install

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Now copy full app
COPY . .

# Precompile bootsnap and assets
RUN bundle exec bootsnap precompile app/ lib/
RUN SECRET_KEY_BASE_DUMMY=1 bundle exec rails assets:precompile

# Final runtime stage
FROM base

RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y curl libvips postgresql-client && \
    rm -rf /var/lib/apt/lists /var/cache/apt/archives

COPY --from=build /usr/local/bundle /usr/local/bundle
COPY --from=build /rails /rails

RUN useradd rails --create-home --shell /bin/bash && \
    chown -R rails:rails db log storage tmp
USER rails:rails

ENTRYPOINT ["/rails/bin/docker-entrypoint"]
EXPOSE 3000
CMD ["bundle", "exec", "rails", "server", "-b", "0.0.0.0", "-p", "3000"]
