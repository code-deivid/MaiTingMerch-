// hero.jsx — cinematic full-bleed hero (clean meta)
function Hero() {
  const [scrollY, setScrollY] = React.useState(0);
  React.useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="hero" id="top" data-screen-label="01 Hero">
      <div className="hero-bg" style={{ transform: `translateY(${scrollY * 0.25}px) scale(${1 + scrollY * 0.0003})` }}>
        <div className="placeholder" data-label="HERO REEL — backstage / crowd / merch booth (16:9 video loop)"></div>
      </div>

      <div className="hero-inner" style={{ transform: `translateY(${scrollY * -0.08}px)` }}>
        <h1 className="hero-title">
          <span className="word"><span>MERCH</span></span>{' '}
          <span className="word"><span>PARA</span></span><br/>
          <em>romper.</em>
        </h1>

        <div className="hero-bottom">
          <p className="hero-sub">
            Merchandising con actitud de calle: diseño, producción, logística y venta para artistas, festivales y marcas que quieren lanzar drops con presencia, ruido y sold-out.
          </p>
          <div className="hero-cta-wrap">
            <a href="#contacto" className="btn-primary" data-cursor="hover">
              LANZAR DROP
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 13L13 1M13 1H4M13 1V10" stroke="currentColor" strokeWidth="1.6"/>
              </svg>
            </a>
            <a href="#solucion" className="btn-ghost" data-cursor="hover">
              VER LO QUE HACEMOS
            </a>
          </div>
        </div>
      </div>

      <div className="scroll-cue">DESPLAZAR / SCROLL</div>
    </section>
  );
}

window.Hero = Hero;
