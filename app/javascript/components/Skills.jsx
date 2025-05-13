import React from "react";

const Skills = () => {
  return(
    <section class="bg-light min-vh-100 d-flex align-items-center bg-dark text-white" id="skills">
      <div class="container">
        <h2 class="text-center mb-5">Skills</h2>
        <div class="row g-4">

          <div class="col-md-4">
            <div class="card h-100 shadow-sm border-0">
              <div class="card-body">
                <h5 class="card-title"><i class="bi bi-code-slash me-2"></i>Frontend</h5>
                <p class="card-text mb-2">React, TypeScript, JavaScript, HTML5, CSS3, Bootstrap, Tailwind</p>
                <div class="progress">
                  <div class="progress-bar bg-primary" style={{width: "90%"}}>90%</div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card h-100 shadow-sm border-0">
              <div class="card-body">
                <h5 class="card-title"><i class="bi bi-hdd-network me-2"></i>Backend</h5>
                <p class="card-text mb-2">Ruby on Rails, Node.js, PostgreSQL, MySQL, REST APIs</p>
                <div class="progress">
                  <div class="progress-bar bg-success" style={{width: "85%"}}>85%</div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card h-100 shadow-sm border-0">
              <div class="card-body">
                <h5 class="card-title"><i class="bi bi-cloud me-2"></i>Cloud & DevOps</h5>
                <p class="card-text mb-2">AWS (EC2, S3, RDS), CI/CD, Docker, GitHub Actions</p>
                <div class="progress">
                  <div class="progress-bar bg-warning text-dark" style={{width: "80%"}}>80%</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Skills;
