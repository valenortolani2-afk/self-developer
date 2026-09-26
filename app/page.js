const projects = [
  {
    number: "01",
    name: "Norte Estudio",
    category: "Identidad digital · Web",
    description:
      "Una presencia digital clara y expresiva para un estudio de arquitectura con mirada propia.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85",
    alt: "Interior contemporáneo de líneas limpias y luz natural",
    className: "project-image-norte",
  },
  {
    number: "02",
    name: "Forma Finance",
    category: "Producto digital · Dashboard",
    description:
      "Una experiencia sencilla para entender mejor los números y tomar decisiones con confianza.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85",
    alt: "Visualización de datos y gráficos en una pantalla",
    className: "project-image-forma",
  },
  {
    number: "03",
    name: "Casa Botánica",
    category: "E-commerce · Desarrollo web",
    description:
      "Una tienda digital cálida y rápida, pensada para descubrir cada producto sin apuro.",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1400&q=85",
    alt: "Plantas de interior bajo luz natural",
    className: "project-image-casa",
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
            <p className="hero-intro">
              Diseño y desarrollo digital para marcas que quieren hacer las cosas de otra manera.
            </p>
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
            <a className="whatsapp-cta" href="https://wa.me/5492233035184" target="_blank" rel="noreferrer" aria-label="Escríbeme por WhatsApp">
              <img src="/botonwpp.png" alt="" />
            </a>
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
        <div className="hero-bottom"><span>Desliza para explorar</span><span className="scroll-line" /></div>
      </section>

      <section className="about section-pad" id="sobre-mi">
        <div className="section-heading">
          <div className="about-heading-top">
            <p className="eyebrow eyebrow-dark">01 / UN POCO SOBRE MÍ</p>
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
        <div className="section-topline"><p className="eyebrow eyebrow-dark">02 / SELECCIÓN DE TRABAJO</p><span>2023 — 2026</span></div>
        <div className="projects-heading"><h2>Proyectos<br /><span>con propósito.</span></h2><p>Un vistazo a ideas que pasaron de la conversación a algo real.</p></div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <a className={`project-visual ${project.className}`} href="#contacto" aria-label={`Consultar por ${project.name}`}>
                <img src={project.image} alt={project.alt} loading="lazy" />
                <span className="project-open"><Arrow /></span>
                <span className="project-count">{project.number} / 03</span>
              </a>
              <div className="project-details">
                <div><p className="project-category">{project.category}</p><h3>{project.name}</h3></div>
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
          <div className="contact-action"><p>Cuéntame qué estás imaginando. Me encantará ayudarte a convertirlo en realidad.</p><a className="button button-dark" href="mailto:valentino@example.com">Escríbeme un correo <Arrow /></a></div>
        </div>
        <div className="contact-bottom"><a href="#inicio" className="back-top">Volver arriba ↑</a><span>Buenos Aires · Disponible en remoto</span></div>
      </section>

      <footer className="site-footer"><a className="footer-brand" href="#inicio">Valentino Ortolani Lopez<span>© 2026</span></a><span>Diseñado con curiosidad. Desarrollado con cuidado.</span><a href="#inicio">Volver al inicio ↑</a></footer>
    </main>
  );
}