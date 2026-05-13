// process.jsx — louder graffiti flow with arrow tags
const STEPS = [
  { title: 'Diseño', desc: 'Si no tienen diseño, lo creamos nosotros: concepto, mockups, cápsula y estética lista para vender.' },
  { title: 'Producción', desc: 'Taller de 3.000 m², acabados, control de calidad, stock y ritmo para drops grandes.' },
  { title: 'Venta', desc: 'Online y física: e-commerce, stands, pop-ups, logística y lectura de datos.' },
];

function Process() {
  return (
    <section className="section process process-v4" id="proceso" data-screen-label="05 Método">
      <div className="spray-bg" aria-hidden="true"><span></span><span></span><span></span></div>
      <div className="section-tag reveal">GRAFFITI FLOW</div>
      <h2 className="section-title reveal">De la idea<br/>al sold-out.</h2>

      <div className="process-flow process-v4-flow">
        {STEPS.map((s, i) => (
          <React.Fragment key={s.title}>
            <article className={`process-tile-v4 step-color-${i} reveal`} style={{ transitionDelay: `${i * 80}ms` }}>
              <span className="process-sticker-v4">{['IDEA','TALLER','SOLD OUT'][i]}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </article>
            {i < STEPS.length - 1 && <div className="graffiti-arrow-v4 reveal" aria-hidden="true"><span>➜</span></div>}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

window.Process = Process;
