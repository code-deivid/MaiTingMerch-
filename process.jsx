// process.jsx — graffiti flow with animated background and 3 connected blocks
const STEPS = [
  { title: 'Diseño', desc: 'Si ya lo tienes, lo adaptamos. Si no, lo hacemos nosotros: concepto, gráfica, mockups y colección con identidad.' },
  { title: 'Producción', desc: 'Taller de 3.000 m², acabados, control de calidad, stock y capacidad para drops, giras y festivales.' },
  { title: 'Venta', desc: 'Online y física: e-commerce, stands, pop-ups, personal de venta, logística y lectura de datos.' },
];

function Process() {
  return (
    <section className="section process process-v3" id="proceso" data-screen-label="05 Método">
      <div className="spray-bg" aria-hidden="true"><span></span><span></span><span></span></div>
      <div className="section-tag reveal">GRAFFITI FLOW</div>
      <h2 className="section-title reveal">De la idea<br/>al sold-out.</h2>
      <p className="section-sub reveal d1">
        Tres pasos fáciles de entender para cualquier artista: creamos el producto, lo fabricamos y lo ponemos a vender.
      </p>

      <div className="process-flow process-v3-flow">
        {STEPS.map((s, i) => (
          <React.Fragment key={s.title}>
            <article className="process-tile process-v3-tile reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <span className="process-sticker">{['IDEA','TALLER','SOLD OUT'][i]}</span>
              <h3 className="process-title">{s.title}</h3>
              <p className="process-desc">{s.desc}</p>
            </article>
            {i < STEPS.length - 1 && <div className="process-graffiti-arrow reveal" aria-hidden="true">➜</div>}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

window.Process = Process;
