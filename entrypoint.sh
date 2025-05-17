#!/bin/bash
set -e

# Setup the database if needed
bundle exec rails db:prepare

# Start the Rails server
exec bundle exec rails server -b 0.0.0.0 -p "${PORT:-3000}"
