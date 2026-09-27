const projects = [
  {
    number: "01",
    name: "Boido Motors",
    category: "Catálogo automotor · Next.js",
    description:
      "Catálogo digital de autos usados con fichas de vehículos y consultas directas para una concesionaria de Mar del Plata.",
    image: "/projects/boido-motors-explorer.jpg",
    alt: "Ford Explorer publicada en el catálogo de Boido Motors",
    demo: "https://boido-motors.vercel.app/",
    className: "project-image-boido",
  },
  {
    number: "02",
    name: "ForDevelopers",
    category: "Captación de clientes · React + Vite",
    description:
      "Landing page para presentar servicios de desarrollo de software a medida y captar ideas y consultas de potenciales clientes.",
    image: "/projects/fordevelopers.jpg",
    alt: "Persona usando una computadora en la página principal de ForDevelopers",
    demo: "/demos/fordevelopers/index.html",
    className: "project-image-fordevelopers",
  },
];

const services = [
  {
    number: "01",
    title: "Diseño de interfaces",
    copy: "Diseño sistemas visuales claros, accesibles y consistentes, del primer boceto al último detalle.",
    tags: "UX/UI · Prototipado · Design systems",
  },
  {
    number: "02",
    title: "Desarrollo frontend",
    copy: "Convierto ideas en productos web rápidos, adaptables y agradables de usar en cualquier pantalla.",
    tags: "React · Next.js · TypeScript",
  },
  {
    number: "03",
    title: "Sitios para marcas",
    copy: "Creo sitios que cuentan bien lo que haces y acompañan a las personas hasta el siguiente paso.",
    tags: "Web · E-commerce · SEO técnico",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <div className="ticker" aria-label="Aplicaciones web, software, aplicaciones, diseño digital, desarrollo web e ideas en movimiento">
        <div className="ticker-track" aria-hidden="true">
          {Array.from({ length: 2 }, (_, index) => (
            <span className="ticker-set" key={index}>
              <span className="ticker-yellow">APLICACIONES WEB</span><b>✳</b>
              <span className="ticker-orange">SOFTWARE</span><b>✳</b>
              <span className="ticker-yellow">APLICACIONES</span><b>✳</b>
              <span className="ticker-orange">DISEÑO DIGITAL</span><b>✳</b>
              <span className="ticker-yellow">DESARROLLO WEB</span><b>✳</b>
              <span className="ticker-orange">IDEAS EN MOVIMIENTO</span><b>✳</b>
            </span>
          ))}
        </div>
      </div>
      <header className="site-header" id="inicio">
        <a className="brand" href="#inicio" aria-label="Valentino Ortolani Lopez, inicio">
          <span className="brand-mark">VO<span>.</span></span>
          <span className="brand-name">Valentino Ortolani Lopez<small>Diseño & desarrollo</small></span>
        </a>
        <nav className="main-nav" aria-label="Navegación principal">
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#servicios">Servicios</a>
          <a className="nav-contact" href="#contacto">Hablemos <Arrow /></a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-content">
          <div className="hero-copy">
            <p className="eyebrow availability-badge"><span className="status-dot" /> Disponible para nuevos proyectos</p>
            <h1>Desarrollador de código que transforma <span className="hero-orange">ideas innovadoras</span> en <span>soluciones reales y prácticas.</span></h1>
            <p className="hero-intro">Diseño y desarrollo digital para marcas que quieren hacer las cosas de otra manera.</p>
            <div className="hero-actions">
              <a className="button button-blue" href="#proyectos">Explorar proyectos <Arrow /></a>
              <a className="text-link" href="#sobre-mi">Conóceme <span aria-hidden="true">↓</span></a>
            </div>
            <div className="hero-meta">
              <span>Buenos Aires, Mar del Plata</span>
              <span className="meta-divider" />
              <span>Trabajando como <span className="meta-violet">freelancer</span> para <span className="meta-orange">proyectos potenciales</span></span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="portrait-frame">
              <img
                className="portrait"
                src="/valentino.jpeg"
                alt="Retrato de Valentino Ortolani Lopez"
              />
            </div>
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
          </div>
        </div>
        <div className="hero-bottom">
          <a className="cv-download" href="/cv.pdf" download="Valentino-Ortolani-Lopez-CV.pdf" aria-label="Descarga mi CV en PDF">Descarga mi CV</a>
          <a className="github-link" href="https://github.com/valenortolani2-AFK" target="_blank" rel="noreferrer" aria-label="Abrir perfil de GitHub">GitHub</a>
        </div>
      </section>

      <a className="whatsapp-cta" href="https://wa.me/5492233035184" target="_blank" rel="noreferrer" aria-label="Escríbeme por WhatsApp">
        <span className="whatsapp-square" aria-hidden="true" />
        <img src="/botonwpp-transparente.png" alt="" />
      </a>

      <section className="about section-pad" id="sobre-mi">
        <div className="section-heading">
          <div className="about-heading-top">
            <p className="eyebrow eyebrow-dark about-label">SOBRE MI</p>
            <span className="about-triangle" aria-hidden="true" />
          </div>
          <h2>Full Stack Developer <span>| Java &amp; Spring Boot</span></h2>
        </div>
        <div className="about-layout">
          <div className="about-copy">
            <p className="about-manifesto">No vendo solamente código.<br /><strong>Vendo la posibilidad de convertir una idea en realidad.</strong></p>
            <p>Soy estudiante de la Universidad Tecnológica Nacional (UTN), Facultad Regional Mar del Plata, y desarrollador orientado al desarrollo Full Stack, con especialización en Java y Spring Boot y conocimientos en HTML, CSS, React y Next.js.</p>
            <p>Tengo 2 años de experiencia trabajando con Java y 1 año de experiencia con HTML y CSS, desarrollando proyectos y construyendo soluciones orientadas a resolver problemas reales.</p>
            <p>Mi forma de trabajar parte de una idea simple: <strong>detrás de cada proyecto hay una persona que imagina algo que todavía no existe</strong>. Mi trabajo es tomar esa idea, entenderla, diseñarla y transformarla en software.</p>
            <p>Trabajo con una mentalidad formal y profesional, poniendo especial atención en la calidad del código, la organización, el cumplimiento de objetivos y la adaptación a las necesidades de cada proyecto. Me interesa comprender no solamente qué debe hacer un sistema, sino también por qué debe hacerlo y cómo puede convertirse en una solución útil, escalable y mantenible.</p>
            <p>Actualmente realizo proyectos freelance mientras continúo capacitándome de manera constante, incorporando nuevas herramientas, tecnologías y buenas prácticas del mercado.</p>
          </div>
          <div className="skills-panel">
            <div className="skills-head"><span>TECNOLOGÍAS</span><span>STACK</span></div>
            <ul className="technology-list">
              <li>Java</li>
              <li>Spring Boot</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript / TypeScript</li>
              <li>React</li>
              <li>Next.js</li>
              <li>SQL</li>
              <li>Git / GitHub</li>
            </ul>
            <div className="about-invitation">
              <p>Si tenés una idea, un problema que necesita una solución tecnológica o un proyecto que necesita desarrollarse, <strong>estoy disponible para asumir nuevos desafíos y trabajar para convertir esa idea en un producto real.</strong></p>
              <p className="about-invitation-close"><strong>Tu idea empieza como una ilusión.<br />El código es el camino para hacerla realidad.</strong></p>
            </div>
          </div>
        </div>
      </section>

      <section className="projects section-pad" id="proyectos">
        <div className="projects-heading"><h2>Proyectos<br /><span>con propósito.</span></h2><p>Dos proyectos publicados en GitHub, desde un catálogo automotor hasta una landing de servicios digitales.</p></div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <a className={`project-visual ${project.className}`} href={project.demo} target="_blank" rel="noreferrer" aria-label={`Ver demo de ${project.name}`}>
                <img src={project.image} alt={project.alt} loading="lazy" />
                <span className="project-open"><Arrow /></span>
                <span className="project-count">{project.number} / {String(projects.length).padStart(2, "0")}</span>
              </a>
              <div className="project-details">
                <div><p className="project-category">{project.category}</p><h3>{project.name}</h3><a className="project-demo-link" href={project.demo} target="_blank" rel="noreferrer">Ver demo <Arrow /></a></div>
                <p className="project-description">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
        <a className="all-projects" href="#contacto">¿Tienes algo en mente? Hablemos <Arrow /></a>
      </section>

      <section className="services section-pad" id="servicios">
        <div className="services-intro">
          <p className="eyebrow">03 / CÓMO PUEDO AYUDAR</p>
          <h2>De la primera<br />idea al <span>último píxel.</span></h2>
          <p className="services-lead">Un proceso colaborativo, pensado para que cada decisión tenga sentido y cada detalle sume.</p>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <article className="service-item" key={service.number}>
              <span className="service-number">{service.number}</span>
              <div><h3>{service.title}</h3><p>{service.copy}</p><span className="service-tags">{service.tags}</span></div>
              <span className="service-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="contact section-pad" id="contacto">
        <div className="contact-topline"><p className="eyebrow eyebrow-dark">04 / EL PRÓXIMO PASO</p><span>Siempre abierto a buenas ideas</span></div>
        <div className="contact-content">
          <div><p className="contact-kicker">¿Tienes un proyecto en mente?</p><h2>Hagamos algo<br /><span>que importe.</span></h2></div>
          <div className="contact-action"><p>Cuéntame qué estás imaginando. Me encantará ayudarte a convertirlo en realidad.</p><a className="button button-dark" href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=valenortolani2%40gmail.com" target="_blank" rel="noreferrer">Escríbeme un correo <Arrow /></a></div>
        </div>
        <div className="contact-bottom"><a href="#inicio" className="back-top">Volver arriba ↑</a><span>Buenos Aires · Disponible en remoto</span></div>
      </section>

      <footer className="site-footer">
        <div className="footer-main">
          <a className="footer-brand" href="#inicio">Valentino Ortolani Lopez<span>© 2026</span></a>
          <p className="footer-tagline">Diseñado con curiosidad. Desarrollado con cuidado.</p>
        </div>
        <div className="footer-contact">
          <a className="footer-contact-link" href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=valenortolani2%40gmail.com" target="_blank" rel="noreferrer">Escribime <Arrow /></a>
          <a className="footer-contact-link" href="tel:+5492233035184">223 303-5184</a>
          <a className="footer-contact-link" href="https://www.instagram.com/valenortolani" target="_blank" rel="noreferrer">@valenortolani</a>
        </div>
        <a href="#inicio" className="footer-back-top">Volver al inicio ↑</a>
      </footer>
    </main>
  );
}