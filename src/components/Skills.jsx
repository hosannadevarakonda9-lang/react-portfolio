import "./Skills.css"

function Skills() {
  return (
    <section className="section" id="skills">
      <h2 className="title">Skills</h2>

      <div className="skills-grid">
        <div className="skill-card">
          <h3>Frontend</h3>
          <p>HTML5, CSS3, JavaScript (ES6+)</p>
        </div>

        <div className="skill-card">
          <h3>React</h3>
          <p>Hooks, Props, State, React Router</p>
        </div>

        <div className="skill-card">
          <h3>Database</h3>
          <p>SQL, Joins, Subqueries</p>
        </div>

        <div className="skill-card">
          <h3>Tools</h3>
          <p>VS Code, Git, GitHub</p>
        </div>
      </div>
    </section>
  )
}

export default Skills
