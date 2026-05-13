// festivals.jsx — festival references separated from artists
const FESTIVALS = [
  { name: 'Love To Rock', city: 'Valencia', tag: 'Rock Festival', img: 'assets/festivals/love-to-rock.svg' },
  { name: 'Viña Rock', city: 'Villarrobledo', tag: 'Merch Stand', img: 'assets/festivals/vina-rock.svg' },
  { name: 'Medusa', city: 'Cullera', tag: 'Festival Drop', img: 'assets/festivals/medusa.svg' },
];

function Festivals() {
  return (
    <section className="festivals" id="festivales" data-screen-label="04 Festivales">
      <div className="festivals-head">
        <div>
          <div className="section-tag reveal">CAPÍTULO / 03</div>
          <h2 className="section-title reveal">Festivales<br/>con ruido.</h2>
        </div>
        <p className="section-sub reveal d1">
          Operativa para stands, drops y venta en directo: diseño de la colección,
          producción, stock y presencia física para que el merch se mueva dentro del festival.
        </p>
      </div>

      <div className="festivals-grid">
        {FESTIVALS.map((f, i) => (
          <article key={f.name} className="fest-card reveal" style={{ transitionDelay: `${i * 70}ms` }}>
            <img src={f.img} alt={`${f.name} festival`} />
            <div className="fest-tag">{f.tag}</div>
            <div className="fest-meta">
              <h3 className="fest-name">{f.name}</h3>
              <div className="fest-info">{f.city} · Online + físico</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

window.Festivals = Festivals;
