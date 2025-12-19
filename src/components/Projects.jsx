import "./Projects.css"

function Projects() {
  return (
    <section className="section" id="projects">
      <h2 className="title">Projects</h2>

      <div className="projects-grid">
        <div className="project-card">
          <h3>React E-Commerce Website</h3>
          <p>
            Responsive e-commerce app with product listing, category filtering,
            cart functionality, and React Router.
          </p>
          <span>React, CSS, JavaScript</span>
        </div>

        <div className="project-card">
          <h3>Form Validation Application</h3>
          <p>
            Built dynamic form validation with real-time error handling using
            React controlled components.
          </p>
          <span>React, JavaScript</span>
        </div>
      </div>
    </section>
  )
}

export default Projects
