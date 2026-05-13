// artists.jsx — artist wall with real image references + calmer street hover
const ARTISTS = [
  { name: 'Morat', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Morat%20en%20concierto.jpg' },
  { name: 'Nathy Peluso', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Nathy%20Peluso%20Live%202024%2005.jpg' },
  { name: 'Rozalén', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Rozal%C3%A9n%2C%20Concierto%20En%C3%A9rgicas%20de%20Greenpeace%2C%20Madrid%202018%2C%2002.jpg' },
  { name: 'Raphael', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/RAPHAEL%20%28cropped%29.JPG' },
  { name: 'Rauw Alejandro', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Rauw%20Alejandro%20Vice%20Versa%20Tour.jpg' },
  { name: 'Feid', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Feid%202022%20%28cropped%29.jpg' },
  { name: 'Chambao', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Chambao%20en%20concierto.jpg' },
  { name: 'Marlena', img: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1400&q=80' },
  { name: 'Paula Mattheus', img: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80' },
];

function Artists() {
  return (
    <section className="artists artists-v3" id="artistas" data-screen-label="03 Artistas">
      <div className="artists-inner">
        <div className="artists-head v3-head">
          <div>
            <div className="section-tag reveal">ARTIST WALL</div>
            <h2 className="section-title reveal">Artistas que<br/>han confiado.</h2>
          </div>
          <p className="section-sub reveal d1">
            Un muro editorial de nombres grandes, recortes reales y estética de backstage. Hover suave, con golpe visual tipo cómic pero sin marear.
          </p>
        </div>

        <div className="artist-wall">
          {ARTISTS.map((a, i) => (
            <a
              key={a.name}
              href="#"
              className="artist-poster reveal"
              data-cursor="hover"
              onClick={(e) => e.preventDefault()}
              style={{ transitionDelay: `${i * 38}ms` }}
            >
              <span className="tape tape-a"></span>
              <span className="tape tape-b"></span>
              <img src={a.img} alt={`${a.name} en directo`} loading="lazy" />
              <span className="poster-shade"></span>
              <h3>{a.name}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Artists = Artists;
