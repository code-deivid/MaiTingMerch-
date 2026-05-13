// app.jsx — main composition

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#d6a738",
  "displayFont": "Archivo Black",
  "showGrain": true,
  "cursorEnabled": true,
  "tickerSpeed": 42
}/*EDITMODE-END*/;

function CustomCursor({ enabled }) {
  const ringRef = React.useRef(null);
  const dotRef = React.useRef(null);

  React.useEffect(() => {
    if (!enabled) return;
    let x = window.innerWidth / 2, y = window.innerHeight / 2;
    let rx = x, ry = y;
    let raf;
    const onMove = (e) => { x = e.clientX; y = e.clientY; if (dotRef.current) { dotRef.current.style.left = x + 'px'; dotRef.current.style.top = y + 'px'; } };
    const tick = () => {
      rx += (x - rx) * 0.18; ry += (y - ry) * 0.18;
      if (ringRef.current) { ringRef.current.style.left = rx + 'px'; ringRef.current.style.top = ry + 'px'; }
      raf = requestAnimationFrame(tick);
    };
    const onOver = (e) => {
      const tgt = e.target.closest('[data-cursor="hover"], a, button, input, textarea, select');
      if (ringRef.current) ringRef.current.classList.toggle('hover', !!tgt);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('mousemove', onMove); window.removeEventListener('mouseover', onOver); };
  }, [enabled]);

  if (!enabled) return null;
  return (
    <React.Fragment>
      <div ref={ringRef} className="cursor"></div>
      <div ref={dotRef} className="cursor-dot"></div>
    </React.Fragment>
  );
}

function useReveal() {
  React.useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('in'); });
    }, { threshold: 0.12, rootMargin: '0px 0px -10% 0px' });
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

function App() {
  const [t, setTweak] = window.useTweaks(TWEAK_DEFAULTS);
  useReveal();

  React.useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty('--gold', t.accent);
    r.style.setProperty('--gold-soft', t.accent + '29');
    r.style.setProperty('--gold-glow', t.accent + '4D');
    r.style.setProperty('--display', `'${t.displayFont}', 'Archivo Black', Impact, sans-serif`);
  }, [t.accent, t.displayFont]);

  React.useEffect(() => {
    const styleId = '__ticker-speed';
    let st = document.getElementById(styleId);
    if (!st) { st = document.createElement('style'); st.id = styleId; document.head.appendChild(st); }
    st.textContent = `.ticker-track{animation-duration:${t.tickerSpeed}s !important}`;
  }, [t.tickerSpeed]);

  return (
    <React.Fragment>
      {t.showGrain && <div className="noise"></div>}
      <div className="vignette"></div>
      <CustomCursor enabled={t.cursorEnabled} />

      <Nav />
      <Hero />
      <Ticker items={[
        'STREET MERCH', 'DROPS LIMITADOS', 'GOLD EDITION', 'TOUR SUPPLY',
        'STANDS DE FESTIVAL', 'PACKAGING', 'LOGÍSTICA', 'POP-UPS',
        'SOLD OUT ENERGY', 'GRAFFITI GOLD',
      ]} />
      <Solution />
      <Artists />
      <Festivals />
      <Process />
      <Contact />

      <footer className="footer footer-v4">
        <div className="footer-v4-top">
          <span className="tape tape-a"></span>
          <h2>MAITINCMERCH!</h2>
          <p>Diseño, producción y venta de merch para artistas, giras y festivales.</p>
        </div>
        <div className="footer-cols footer-v4-cols">
          <div className="footer-col">
            <div className="footer-col-label">Contacto</div>
            <a href="mailto:hola@maitincmerch.com" data-cursor="hover">hola@maitincmerch.com</a>
            <a href="tel:+34000000000" data-cursor="hover">+34 000 000 000</a>
          </div>
          <div className="footer-col">
            <div className="footer-col-label">Ruta rápida</div>
            <a href="#solucion" data-cursor="hover">Servicios</a>
            <a href="#artistas" data-cursor="hover">Artistas</a>
            <a href="#festivales" data-cursor="hover">Festivales</a>
            <a href="#contacto" data-cursor="hover">Brief</a>
          </div>
          <div className="footer-col">
            <div className="footer-col-label">Social</div>
            <a href="https://instagram.com" data-cursor="hover">Instagram / @maitincmerch</a>
            <a href="https://facebook.com" data-cursor="hover">Facebook / maitincmerch</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 MAITINCMERCH! · TOUR SUPPLY · STREET DROP · SOLD OUT</span>
          <div><a href="#" data-cursor="hover">Privacidad</a><a href="#" data-cursor="hover">Cookies</a><a href="#" data-cursor="hover">Aviso legal</a></div>
        </div>
      </footer>

      <window.TweaksPanel title="Tweaks">
        <window.TweakSection label="Identidad" />
        <window.TweakColor
          label="Acento metálico"
          value={t.accent}
          options={['#d6a738', '#ffdf7a', '#b8862d', '#e8c580', '#7a5514']}
          onChange={(v) => setTweak('accent', v)}
        />
        <window.TweakSelect
          label="Display font"
          value={t.displayFont}
          options={['Archivo Black', 'Anton', 'Bebas Neue', 'Boldonse', 'Syne']}
          onChange={(v) => setTweak('displayFont', v)}
        />
        <window.TweakSection label="Atmósfera" />
        <window.TweakToggle
          label="Grano de película"
          value={t.showGrain}
          onChange={(v) => setTweak('showGrain', v)}
        />
        <window.TweakToggle
          label="Cursor personalizado"
          value={t.cursorEnabled}
          onChange={(v) => setTweak('cursorEnabled', v)}
        />
        <window.TweakSlider
          label="Velocidad ticker"
          value={t.tickerSpeed} min={20} max={80} step={2} unit="s"
          onChange={(v) => setTweak('tickerSpeed', v)}
        />
      </window.TweaksPanel>
    </React.Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
