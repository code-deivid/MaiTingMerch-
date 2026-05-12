// festivals.jsx — only confirmed references
const REFERENCES = [
  { name: 'Viña Rock',   year: 'Festival',  tag: 'Stand + Operativa', media: 'VIÑA ROCK — booth / crowd' },
  { name: 'Consum',      year: 'Marca',     tag: 'Marketing + Merch', media: 'CONSUM — brand merchandising' },
];

function Festivals() {
  const trackRef = React.useRef(null);
  const scrollBy = (dir) => {
    if (!trackRef.current) return;
    trackRef.current.scrollBy({ left: dir * 504, behavior: 'smooth' });
  };
  return (
    <section className="festivals" id="festivales" data-screen-label="04 Referencias">
      <div className="festivals-head">
        <h2 className="section-title reveal">
          Referencias<br/>reales.
        </h2>
        <p className="section-sub reveal d1" style={{ marginTop: 24 }}>
          Trabajamos con artistas, festivales y marcas. Dos ejemplos
          confirmados de lo que hacemos cuando el cliente nos da el escenario.
        </p>
      </div>

      <div className="festivals-track" ref={trackRef}>
        {REFERENCES.map((f, i) => (
          <div key={f.name} className="fest-card reveal" style={{ transitionDelay: `${i * 60}ms` }}>
            <div className="placeholder" data-label={f.media}></div>
            <div className="fest-tag">{f.tag}</div>
            <div className="fest-meta">
              <h3 className="fest-name">{f.name}</h3>
              <div className="fest-info">{f.year}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

window.Festivals = Festivals;
