// festivals.jsx — animated festival posters
const FESTIVALS = [
  { name: 'Love To Rock', city: 'València', img: 'https://lovetorockfestival.es/wp-content/uploads/2025/10/LTR_2026_HOME.jpg' },
  { name: 'Viña Rock', city: 'Villarrobledo', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Vi%C3%B1a%20rock%202007.jpg' },
  { name: 'Medusa', city: 'Cullera', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Escenario%20principal%20Medusa%20Sunbeach%20Festival%202015.jpg' },
];

function Festivals() {
  return (
    <section className="festivals festivals-v4" id="festivales" data-screen-label="04 Festivales">
      <div className="festivals-head v3-head">
        <div>
          <div className="section-tag reveal">FESTIVAL SUPPLY</div>
          <h2 className="section-title reveal">Festivales<br/>con merch vivo.</h2>
        </div>
        <p className="section-sub reveal d1">Stands, stock, drops exclusivos, venta física y energía de recinto.</p>
      </div>

      <div className="festival-stage">
        {FESTIVALS.map((f, i) => (
          <article key={f.name} className={`festival-poster-v4 festival-${i} reveal`} style={{ transitionDelay: `${i * 90}ms` }}>
            <span className="tape tape-a"></span>
            <span className="tape tape-b"></span>
            <img src={f.img} alt={`${f.name} festival`} loading="lazy" />
            <div className="festival-label-v4">
              <h3>{f.name}</h3>
              <span>{f.city}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

window.Festivals = Festivals;
