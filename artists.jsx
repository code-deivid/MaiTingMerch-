// artists.jsx — streetwear grid with Spider-Verse-style stepped hover frames
const ARTISTS = [
  { name: 'Morat', genre: 'Pop / Latin', img: 'assets/artists/morat.svg', tag: 'Tour Drop' },
  { name: 'Nathy Peluso', genre: 'Hip-Hop / Jazz', img: 'assets/artists/nathy-peluso.svg', tag: 'Capsule' },
  { name: 'Rozalén', genre: 'Cantautora', img: 'assets/artists/rozalen.svg', tag: 'Live Merch' },
  { name: 'Raphael', genre: 'Leyenda', img: 'assets/artists/raphael.svg', tag: 'Premium Line' },
  { name: 'Rauw Alejandro', genre: 'Reggaetón', img: 'assets/artists/rauw-alejandro.svg', tag: 'Arena Drop' },
  { name: 'Feid', genre: 'Reggaetón', img: 'assets/artists/feid.svg', tag: 'Street Drop' },
  { name: 'Chambao', genre: 'Flamenco Chill', img: 'assets/artists/chambao.svg', tag: 'Festival Fit' },
  { name: 'Marlena', genre: 'Pop / Indie', img: 'assets/artists/marlena.svg', tag: 'Limited Run' },
  { name: 'Paula Mattheus', genre: 'Cantautora', img: 'assets/artists/paula-mattheus.svg', tag: 'Online + Show' },
];

function Artists() {
  return (
    <section className="artists" id="artistas" data-screen-label="03 Artistas">
      <div className="artists-inner">
        <div className="artists-head">
          <div>
            <div className="section-tag reveal">CAPÍTULO / 02</div>
            <h2 className="section-title reveal">Artistas que<br/>han confiado.</h2>
          </div>
          <div className="artists-counter reveal d1">[ GRID MODE · HOVER PARA VER FOTO ]</div>
        </div>

        <div className="artists-grid">
          {ARTISTS.map((a, i) => (
            <a
              key={a.name}
              href="#"
              className="artist-card reveal"
              data-cursor="hover"
              onClick={(e) => e.preventDefault()}
              style={{ transitionDelay: `${i * 45}ms` }}
            >
              <div className="artist-card-media">
                <img src={a.img} alt={`${a.name} referencia visual`} />
                <span className="spray-dot dot-a"></span>
                <span className="spray-dot dot-b"></span>
              </div>
              <div className="artist-card-top">
                <span>/ {String(i + 1).padStart(2, '0')}</span>
                <span>{a.tag}</span>
              </div>
              <h3>{a.name}</h3>
              <p>{a.genre}</p>
              <span className="artist-card-arrow">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Artists = Artists;
