// hero.jsx — brighter streetwear hero with real editorial photos
function Hero() {
  const [scrollY, setScrollY] = React.useState(0);
  React.useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="hero hero-v3" id="top" data-screen-label="01 Hero">
      <div className="hero-bg" style={{ transform: `translateY(${scrollY * 0.18}px) scale(${1 + scrollY * 0.00025})` }}>
        <img src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1800&q=80" alt="Concierto urbano" />
      </div>

      <div className="hero-photo-stack" aria-hidden="true">
        <img className="hero-polaroid p1" src="https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=900&q=80" alt="" />
        <img className="hero-polaroid p2" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80" alt="" />
        <img className="hero-polaroid p3" src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80" alt="" />
      </div>

      <div className="hero-inner" style={{ transform: `translateY(${scrollY * -0.08}px)` }}>
        <div className="hero-kicker">MAITINC MERCH · GOLD STREET SUPPLY</div>
        <h1 className="hero-title">
          <span className="word"><span>MERCH</span></span>{' '}
          <span className="word"><span>PARA</span></span><br/>
          <em>artistas.</em>
        </h1>

        <div className="hero-bottom">
          <p className="hero-sub">
            Diseño, producción, logística y venta para artistas, festivales y marcas que quieren lanzar drops con presencia de calle, acabado premium y energía de sold-out.
          </p>
          <div className="hero-cta-wrap">
            <a href="#contacto" className="btn-primary" data-cursor="hover">LANZAR DROP</a>
            <a href="#solucion" className="btn-ghost" data-cursor="hover">VER SERVICIO 360º</a>
          </div>
        </div>
      </div>

      <div className="scroll-cue">SCROLL / BAJA AL MURO</div>
    </section>
  );
}

window.Hero = Hero;
