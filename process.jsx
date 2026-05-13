// process.jsx — 3 connected graffiti blocks
const STEPS = [
  { title: 'Diseño', desc: 'Si ya tienes arte, lo preparamos para vender. Si no lo tienes, lo creamos desde cero con estética de drop, mockups y colección lista para producir.' },
  { title: 'Producción', desc: 'Fabricamos en nuestro taller de +3.000 m² con control de calidad, acabados, tallaje, stock y ritmo preparado para campañas grandes.' },
  { title: 'Venta', desc: 'Activamos la venta online y también la física: tiendas, stands, pop-ups, festivales y eventos con operativa real de merchandising.' },
];

function Process() {
  return (
    <section className="section process" id="proceso" data-screen-label="05 Método">
      <div className="section-tag reveal">CAPÍTULO / 04</div>
      <h2 className="section-title reveal">De la idea<br/>al sold-out.</h2>
      <p className="section-sub reveal d1">
        Tres golpes claros: diseñamos, producimos y vendemos. Menos explicación corporativa,
        más acción de calle.
      </p>

      <div className="process-flow">
        {STEPS.map((s, i) => (
          <React.Fragment key={s.title}>
            <article className="process-tile reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <span className="process-num">/ 0{i + 1}</span>
              <h3 className="process-title">{s.title}</h3>
              <p className="process-desc">{s.desc}</p>
              <span className="process-stamp">MTM!</span>
            </article>
            {i < STEPS.length - 1 && <div className="process-graffiti-arrow reveal">➜</div>}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

window.Process = Process;
