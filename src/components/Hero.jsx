import "./Hero.css"

function Hero() {
  return (
    <section className="hero">
      <h1>Devarakonda Hosanna</h1>
      <p>Web / React Developer (Fresher)</p>

      <a 
        href="/resume.pdf" 
        download 
        className="btn"
      >
        Download Resume
      </a>
    </section>
  )
}

export default Hero
