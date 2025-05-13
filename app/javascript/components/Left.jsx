import React from "react";

const Left = () => {
  return(
    <div className="text-center text-lg-start">
      <img
        src="/pic.jpeg"
        alt="Nathan"
        className="profile-img img-fluid mb-4 rounded-circle shadow-lg"
        style={{ maxWidth: '150px' }}
      />
      <h1 className="display-5 fw-bold">Hey, I’m Princi</h1>
      <p className="lead text-white-50">
        I craft high-performing, accessible web applications with <strong>React</strong> and <strong>Ruby on Rails</strong>, turning complex problems into seamless user experiences.
      </p>

      <div className="mt-4">
        <a href="/files/Princi-CV.pdf" download className="btn btn-light me-3">
          <i class="bi bi-download me-2"></i>Download CV
        </a>
        <a href="https://github.com/princi123" target="_blank" rel="noreferrer" className="btn btn-outline-light">GitHub</a>
      </div>
    </div>
  )
}

export default Left;
