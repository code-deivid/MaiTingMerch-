// artists.jsx — editorial hover-reveal list
const ARTISTS = [
  { name: 'Morat',           genre: 'Pop / Latin' },
  { name: 'Nathy Peluso',    genre: 'Hip-Hop / Jazz' },
  { name: 'Rozalén',         genre: 'Cantautora' },
  { name: 'Raphael',         genre: 'Leyenda' },
  { name: 'Rauw Alejandro',  genre: 'Reggaetón' },
  { name: 'Feid',            genre: 'Reggaetón' },
  { name: 'Love To Rock',    genre: 'Rock' },
  { name: 'Chambao',         genre: 'Flamenco Chill' },
  { name: 'Marlena',         genre: 'Pop / Indie' },
  { name: 'Paula Mattheus',  genre: 'Cantautora' },
];

function Artists() {
  const [hover, setHover] = React.useState(null);
  const [pos, setPos] = React.useState({ x: 0, y: 0 });

  const onMove = (e) => setPos({ x: e.clientX, y: e.clientY });

  return (
    <section className="artists" id="artistas" data-screen-label="03 Artistas" onMouseMove={onMove}>
      <div className="artists-inner">
        <div className="artists-head">
          <div>
            <div className="section-tag reveal">CAPÍTULO / 02</div>
            <h2 className="section-title reveal">
              Artistas que<br/>han confiado.
            </h2>
          </div>
          <div className="artists-counter reveal d1">
            [ {String(ARTISTS.length).padStart(3, '0')} ARTISTAS · +120 GIRAS ]
          </div>
        </div>

        <div className="artists-list">
          {ARTISTS.map((a, i) => (
            <a
              key={a.name}
              href="#"
              className="artist-row"
              data-cursor="hover"
              onClick={(e) => e.preventDefault()}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
            >
              <span className="artist-idx">/ {String(i + 1).padStart(2, '0')}</span>
              <span className="artist-name">{a.name}</span>
              <span className="artist-genre">{a.genre}</span>
              <span className="artist-arrow">→</span>
            </a>
          ))}
        </div>
      </div>

      <div
        className={`artist-preview ${hover !== null ? 'active' : ''}`}
        style={{ '--cx': `${pos.x}px`, '--cy': `${pos.y}px` }}
      >
        <div className="placeholder" data-label={hover !== null ? `${ARTISTS[hover].name.toUpperCase()} — portrait / live shot` : ''}></div>
        {hover !== null && <div className="artist-preview-label">[ {ARTISTS[hover].name} · 2025 TOUR ]</div>}
      </div>
    </section>
  );
}

window.Artists = Artists;
