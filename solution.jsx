// solution.jsx — sección 360 revertida a grid editorial limpio
const SERVICE_BLOCKS = [
  { title: 'Diseño de colección', text: 'Si el artista no tiene diseño, lo creamos: dirección de arte, mockups y cápsulas listas para vender.', span: 'wide' },
  { title: 'Producción propia', text: 'Taller de 3.000 m², acabados, tallaje, etiquetado, packaging y control de calidad.', span: 'tall', img: 'https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Venta online', text: 'Tienda, stock, reporting y reposiciones para no perder oportunidades.', span: '' },
  { title: 'Venta física', text: 'Stands, pop-ups, activaciones y equipo preparado para recinto.', span: 'wide', img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Logística', text: 'Envíos, timings, organización de stock y seguimiento del drop.', span: '' },
];

function Solution() {
  return (
    <section className="section solution solution-v5" id="solucion" data-screen-label="02 Solución 360º">
      <div className="solution-head">
        <div>
          <div className="section-tag reveal">SERVICIO 360º</div>
          <h2 className="section-title reveal">Todo el drop,<br/>sin pasar por<br/><em>10 proveedores.</em></h2>
        </div>
        <p className="section-sub reveal d1">
          Un sistema completo para artistas, giras y festivales: diseñamos, producimos, montamos y vendemos el merch con una estética de calle pero acabado profesional.
        </p>
      </div>

      <div className="solution-grid solution-grid-v5">
        {SERVICE_BLOCKS.map((s, i) => (
          <article key={s.title} className={`svc svc-v5 ${s.span ? `svc-${s.span}` : ''} ${s.img ? 'has-media' : ''} reveal`} style={{ transitionDelay: `${i * 60}ms` }}>
            {s.img && <img className="svc-img" src={s.img} alt="" loading="lazy" />}
            <span className="tape tape-a"></span>
            <div className="svc-content">
              <span className="svc-num">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="svc-title">{s.title}</h3>
                <p className="svc-desc">{s.text}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

window.Solution = Solution;
