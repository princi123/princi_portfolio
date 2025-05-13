import React from "react";

const Project = () => {
  return(
    <section id="projects" className="bg-light align-items-center bg-dark text-white" style={{minHeight: "100vh"}}>
      <div className="container vh-100">
        <div className="row h-100 align-items-center">
          <h2 className="text-center mb-4">Projects</h2>
          {/* Project Card */}
          <div className="row">
            {[
              { img: "/uplaunch.png", title: "UpLaunch", description: "At UpLaunch, I was responsible for enhancing the user experience of their CRM platform by developing responsive, component-driven interfaces using React and Bootstrap, and optimizing performance across major user flows." },
              { img: "/boardeffect.png", title: "BoardEffect", description: "At BoardEffect, I developed features to improve meeting preparation, agenda management, and document collaboration on their board governance platform using ruby on rails."  },
              { img: "/maropost.webp", title: "Maropost", description: "At Maropost Marketing Cloud, I contributed to developing and optimizing multichannel marketing automation features—enhancing personalized email, SMS, and web campaigns to improve customer engagement and deliverability." },
            ].map((project, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card h-100 shadow-sm">
                  <img
                    src={project.img}
                    className="card-img-top"
                    alt={project.title}
                    style={{ objectFit: "cover", height: "250px" }} // keeps image height uniform
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text flex-grow-1">
                      {project.description}.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Add more project cards here */}
        </div>
      </div>
    </section>
  )
}

export default Project;
