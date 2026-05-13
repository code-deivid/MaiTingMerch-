// festivals.jsx — real festival section moved out of artists
const FESTIVALS = [
  { name: 'Love To Rock', city: 'València', img: 'https://lovetorockfestival.es/wp-content/uploads/2025/10/LTR_2026_HOME.jpg' },
  { name: 'Viña Rock', city: 'Villarrobledo', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Vi%C3%B1a%20rock%202007.jpg' },
  { name: 'Medusa', city: 'Cullera', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Escenario%20principal%20Medusa%20Sunbeach%20Festival%202015.jpg' },
];

function Festivals() {
  return (
    <section className="festivals festivals-v3" id="festivales" data-screen-label="04 Festivales">
      <div className="festivals-head v3-head">
        <div>
          <div className="section-tag reveal">FESTIVAL SUPPLY</div>
          <h2 className="section-title reveal">Festivales<br/>con merch vivo.</h2>
        </div>
        <p className="section-sub reveal d1">
          Love To Rock sale de artistas y entra aquí: stands, stock, personal de venta, drops exclusivos y experiencia física dentro del recinto.
        </p>
      </div>

      <div className="festival-wall">
        {FESTIVALS.map((f, i) => (
          <article key={f.name} className="festival-poster reveal" style={{ transitionDelay: `${i * 70}ms` }}>
            <span className="tape tape-a"></span>
            <img src={f.img} alt={`${f.name} festival`} loading="lazy" />
            <div className="festival-label">
              <h3>{f.name}</h3>
              <span>{f.city} · Online + físico</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

window.Festivals = Festivals;
