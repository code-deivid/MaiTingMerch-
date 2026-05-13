// nav.jsx — street paper nav with active tape indicator
function Nav() {
  const links = [
    ['#solucion', 'Servicios'],
    ['#artistas', 'Artistas'],
    ['#festivales', 'Festivales'],
    ['#proceso', 'Proceso'],
    ['#contacto', 'Contacto'],
  ];
  const [active, setActive] = React.useState('#top');

  React.useEffect(() => {
    const ids = links.map(([href]) => href.slice(1));
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    const obs = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive('#' + visible.target.id);
    }, { threshold: [0.22, 0.38, 0.55], rootMargin: '-18% 0px -45% 0px' });
    sections.forEach((section) => obs.observe(section));
    return () => obs.disconnect();
  }, []);

  return (
    <nav className="nav nav-v4">
      <a href="#top" className="nav-logo" data-cursor="hover" aria-label="MaiTincMerch! Home">
        <img src="assets/logo.png" alt="MaiTincMerch!" className="nav-logo-img" />
        <span className="nav-logo-text">MaiTincMerch!</span>
      </a>
      <div className="nav-links">
        {links.slice(0, 4).map(([href, label]) => (
          <a key={href} href={href} className={`nav-link ${active === href ? 'is-active' : ''}`} data-cursor="hover">{label}</a>
        ))}
      </div>
      <a href="#contacto" className={`nav-cta ${active === '#contacto' ? 'is-active' : ''}`} data-cursor="hover">Brief</a>
    </nav>
  );
}

window.Nav = Nav;
