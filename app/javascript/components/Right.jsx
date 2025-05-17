import React from "react";

const Right = () => {
  return(
    <div className="code-wrapper mb-5 mb-lg-0 position-relative">
      <img
        src="/code.jpeg"
        alt="Code Snippet"
        className="img-fluid rounded-4 shadow"
        style={{ maxWidth: '730px' }}
      />
      {/* Overlay content on the code image */}
      <div className="code-overlay position-absolute top-50 start-50 translate-middle text-center text-light p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', borderRadius: '10px' }}>
        <h3 className="fw-bold">React + TypeScript</h3>
        <p className="mb-0">Building powerful web apps with modern technologies.</p>
      </div>
    </div>
  )
}

export default Right;
