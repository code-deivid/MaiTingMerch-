// nav.jsx — minimal fixed nav with logo image
function Nav() {
  return (
    <nav className="nav">
      <a href="#top" className="nav-logo" data-cursor="hover" aria-label="MaiTincMerch! Home">
        <img src="assets/logo.png" alt="MaiTincMerch!" className="nav-logo-img" />
      </a>
      <div className="nav-links">
        <a href="#solucion" className="nav-link" data-cursor="hover">Servicios</a>
        <a href="#artistas" className="nav-link" data-cursor="hover">Artistas</a>
        <a href="#proceso" className="nav-link" data-cursor="hover">Proceso</a>
      </div>
      <a href="#contacto" className="nav-cta" data-cursor="hover">
        Contacto
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <path d="M1 9L9 1M9 1H2M9 1V8" stroke="currentColor" strokeWidth="1.2"/>
        </svg>
      </a>
    </nav>
  );
}

window.Nav = Nav;
