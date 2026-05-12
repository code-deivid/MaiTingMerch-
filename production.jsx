// production.jsx — real infrastructure, no fake numbers
function CountUp({ to, suffix = '', duration = 2000 }) {
  const [val, setVal] = React.useState(0);
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setVal(Math.round(to * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        obs.disconnect();
      }
    }, { threshold: 0.4 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to, duration]);

  return <span ref={ref}>{val.toLocaleString('es-ES')}{suffix}</span>;
}

function Production() {
  return (
    <section className="section production" id="produccion" data-screen-label="03 Producción">
      <h2 className="production-banner reveal">
        <span className="line">Producción real,</span>
        <span className="line"><em>equipo</em> propio.</span>
      </h2>
      <p className="section-sub reveal d1" style={{ marginBottom: 80, maxWidth: 760 }}>
        Una estructura preparada para crear, producir y activar
        merchandising a cualquier escala. Taller propio, máquinas propias
        y un equipo en plantilla para llevar cada proyecto del diseño a la entrega.
      </p>

      <div className="production-grid">
        <div className="prod-card media reveal">
          <div className="placeholder" data-label="WORKSHOP — DTG / silkscreen line"></div>
        </div>
        <div className="prod-card reveal d1">
          <div className="metric-num"><CountUp to={3000} suffix="" /><sup>m²</sup></div>
          <div className="metric-label">Taller propio con líneas de DTG, serigrafía, bordado y sublimación.</div>
        </div>
      </div>

      <div className="production-bottom">
        <div className="prod-card reveal">
          <div className="prod-pill">REFERENCIA · FESTIVAL</div>
          <div className="prod-ref">Viña Rock</div>
          <div className="metric-label">Operativa de stand y merchandising en uno de los festivales de referencia del país.</div>
        </div>
        <div className="prod-card reveal d1">
          <div className="prod-pill">REFERENCIA · MARCA</div>
          <div className="prod-ref">Consum</div>
          <div className="metric-label">Proyectos de marketing y producción de merchandising para una de las grandes marcas de retail.</div>
        </div>
        <div className="prod-card reveal d2">
          <div className="prod-pill">CONTROL TOTAL</div>
          <div className="prod-ref">In&nbsp;house</div>
          <div className="metric-label">Diseño, producción, logística y venta bajo un mismo techo. Sin intermediarios.</div>
        </div>
      </div>
    </section>
  );
}

window.Production = Production;
