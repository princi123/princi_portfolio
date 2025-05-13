import React, { useState } from "react";


const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user: formData }),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const error = await res.json();
        setStatus(error.error || 'Something went wrong.');
      }
    } catch (err) {
      setStatus('Network error.');
    }
  };

  return(
    <section class="min-vh-100 d-flex align-items-center bg-dark text-white" id="contact">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="text-center mb-4">
              <h2>Contact Me</h2>
              <p class="text-muted">I'd love to hear from you!</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div class="mb-3">
                <label for="name" class="form-label">Your Name</label>
                <input
                  className="form-control"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Your Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />              </div>
              <div class="mb-3">
                <label for="message" class="form-label">Your Message</label>
                <textarea
                  className="form-control"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>              </div>
              <div class="d-grid">
                <button type="submit" class="btn btn-primary btn-lg">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
