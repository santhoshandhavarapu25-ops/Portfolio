import './App.css'

const contactLinks = [
  {
    label: 'Email',
    value: 'santhoshandhavarapu25@gmail.com',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=santhoshandhavarapu25@gmail.com',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/santhosh-andhavarapu-a14b1a326',
    href: 'https://www.linkedin.com/in/santhosh-andhavarapu-a14b1a326/',
  },
  {
    label: 'Mobile',
    value: '+91-9030280861',
    href: 'https://wa.me/919030280861',
  },
  {
    label: 'GitHub',
    value: 'santhoshandhavarapu25-ops',
    href: 'https://github.com/santhoshandhavarapu25-ops',
  },
]

const skillGroups = [
  {
    title: 'Languages',
    items: ['Python', 'Java', 'C++'],
  },
  {
    title: 'Web Development',
    items: ['HTML', 'CSS'],
  },
  {
    title: 'Libraries',
    items: ['NumPy', 'Pandas', 'Matplotlib'],
  },
  {
    title: 'Database',
    items: ['MySQL','MongoDB'],
  },
  {
    title: 'Operating Systems',
    items: ['Windows', 'Linux'],
  },
  {
    title: 'Tools',
    items: ['VS Code', 'Jupyter Notebook'],
  },
]

const education = [
  {
    school: 'Gowtham Model School',
    place: 'Hyderabad, India',
    meta: 'CGPA: 9.5/10',
    year: '2022',
  },
  {
    school: 'Sri Chaitanya Junior College',
    place: 'Hyderabad, India',
    meta: 'MPC; Percentage: 96.8%',
    year: '2022 - 2024',
  },
  {
    school: 'Vardhaman College of Engineering',
    place: 'Hyderabad, India',
    meta: 'Bachelor of Technology - CSE; CGPA: 8.98/10',
    year: '2024 - 2028',
  },
]

const projects = [
  {
    name: 'AI HUB',
    summary:
      'A single platform for AI tools that brings text generation, image creation, and coding assistance together in one simple interface.',
    details:
      'Built to help users move quickly between writing, designing, learning, and automation tasks without leaving the platform.',
    stack: ['Vite', 'React', 'TypeScript', 'Tailwind CSS', 'PostCSS', 'Supabase'],
    link: 'https://github.com/santhoshandhavarapu25-ops',
  },
]

const certifications = [
  'Programming in Java Certification - NPTEL - Jul 2025 to Oct 2025',
  'Python Certificate - HackerRank - 22 Mar 2026',
  'Java Certificate - HackerRank - 25 Mar 2026',
  'FullStack Development 101 - Simplilearn - 17 Sep 2024',
]

const extracurricular = [
  'Taking online classes to deepen my knowledge in programming.',
  'Playing puzzle games to improve logical thinking and problem solving.',
  'Playing cricket as a leisure game that builds teamwork and focus.',
]

function App() {
  return (
    <main className="portfolio-shell">
      <header className="topbar">
        <a className="brand" href="#home">
          <span className="brand-mark">SA</span>
          <span>
            Andhavarapu <strong>Santhosh</strong>
          </span>
        </a>
        <nav className="topnav" aria-label="Primary">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero-section" id="home">
        <div className="hero-copy">
          <p className="eyebrow">Computer Science graduate | Full-stack learner</p>
          <h1>
            Building clean, practical web experiences with a strong foundation in
            Java, Python, and problem solving.
          </h1>
          <p className="lead">
            I am a driven and passionate graduate in Computer Science with hands-on
            exposure through academic projects, database concepts, and full-stack
            development basics. I enjoy creating web applications, writing clean
            code, and learning fast in collaborative environments.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#projects">
              View Projects
            </a>
            <a className="secondary-button" href="#contact">
              Contact Me
            </a>
          </div>

          <div className="contact-strip">
            {contactLinks.map((item) => (
              <a key={item.label} href={item.href} target={item.label === 'Email' || item.label === 'Mobile' ? undefined : '_blank'} rel={item.label === 'Email' || item.label === 'Mobile' ? undefined : 'noreferrer'}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="panel" id="about">
        <div className="section-heading">
          <p>About</p>
          <h2>Clear goals, steady growth, and a practical mindset.</h2>
        </div>
        <p className="about-text">
          I want to receive direct industry experience and contribute to innovations
          in technology. My background combines computer science study and hands-on
          academic projects; I am eager to grow my skills through real industry
          experience.
        </p>
      </section>

      <section className="grid-section" id="skills">
        <div className="section-heading">
          <p>Skills Summary</p>
          <h2>Tools and technologies I work with today.</h2>
        </div>
        <div className="skill-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <div className="chip-row">
                {group.items.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid-section" id="education">
        <div className="section-heading">
          <p>Education</p>
          <h2>Academic path.</h2>
        </div>
        <div className="timeline">
          {education.map((item) => (
            <article className="timeline-item" key={`${item.school}-${item.year}`}>
              <div className="timeline-year">{item.year}</div>
              <div>
                <h3>{item.school}</h3>
                <p className="timeline-place">{item.place}</p>
                <p>{item.meta}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid-section" id="projects">
        <div className="section-heading">
          <p>Projects</p>
          <h2>One representative project so far.</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <div className="project-topline">
                <span className="project-tag">Featured</span>
                <a href={project.link} target="_blank" rel="noreferrer">
                  GitHub Profile
                </a>
              </div>
              <h3>{project.name}</h3>
              <p>{project.summary}</p>
              <p>{project.details}</p>
              <div className="chip-row">
                {project.stack.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid-section split-section">
        <div id="certifications">
          <div className="section-heading">
            <p>Courses</p>
            <h2>Certificates and learning milestones.</h2>
          </div>
          <ul className="list-panel">
            {certifications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div id="extracurricular">
          <div className="section-heading">
            <p>Extracurricular</p>
            <h2>What I do outside class and projects.</h2>
          </div>
          <ul className="list-panel">
            {extracurricular.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="contact-band" id="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Open to internships, projects, and collaborative work.</h2>
        </div>
        <div className="contact-links">
          {contactLinks.map((item) => (
            <a key={item.label} href={item.href} target={item.label === 'Email' || item.label === 'Mobile' ? undefined : '_blank'} rel={item.label === 'Email' || item.label === 'Mobile' ? undefined : 'noreferrer'}>
              {item.label}
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}
export default App
