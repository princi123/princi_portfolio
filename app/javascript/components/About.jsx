import React from "react";

const About  = () => {
  return(
    <section id="about" class="bg-light d-flex align-items-center bg-dark" style={{minHeight: "100vh"}}>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8 bg-white p-5 rounded shadow">
            <h1 class="mb-4 text-center">About Me</h1>
            <h4>
              <strong>Princi</strong> is a full-stack developer based in Auckland, New Zealand, with 9 years of experience building scalable, user-friendly applications. Specializing in <strong>React</strong>, <strong>Ruby on Rails</strong>, and <strong>AWS</strong>, Princi is passionate about clean code, intuitive design, and solving real-world problems through technology.
            </h4>
            <h4>
              Currently on a <strong>post-study open work visa</strong>, Princi is seeking meaningful opportunities with mission-driven teams. With a background in IT and telecommunications, Princi thrives in agile environments and enjoys mentoring, collaboration, and continuous learning.
            </h4>
            <h4>
              Outside of tech, Princi enjoys exploring New Zealand’s landscapes, spending time with family, and brainstorming ideas that make a difference.
            </h4>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
