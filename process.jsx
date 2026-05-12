// process.jsx — vertical storytelling timeline
const STEPS = [
  { num: '01', title: 'Idea', desc: 'Sesión de dirección creativa con el artista o el equipo. Mood, mensaje, drop calendar.' },
  { num: '02', title: 'Diseño', desc: 'Iteración rápida con mockups reales sobre prenda. Aprobación digital y física.' },
  { num: '03', title: 'Producción', desc: 'Fabricación en nuestro taller. Control de calidad pieza a pieza.' },
  { num: '04', title: 'Logística', desc: 'Almacén dedicado. Picking en menos de 24h. Envíos a 38 países.' },
  { num: '05', title: 'Venta', desc: 'Online con tienda propia. Físico con personal propio a pie de escenario.' },
  { num: '06', title: 'Evento', desc: 'Stand operativo, reporting en tiempo real, reposiciones en caliente.' },
];

function Process() {
  return (
    <section className="section process" id="proceso" data-screen-label="05 Método">
      <h2 className="section-title reveal">De la idea<br/>al sold-out.</h2>
      <p className="section-sub reveal d1">
        Un flujo testeado en cientos de proyectos. Lineal cuando hace falta,
        elástico cuando el calendario aprieta.
      </p>

      <div className="process-list">
        {STEPS.map((s) => (
          <div key={s.num} className="process-step reveal">
            <span className="process-num">/ {s.num}</span>
            <h3 className="process-title">{s.title}</h3>
            <p className="process-desc">{s.desc}</p>
            <span className="process-icon">→</span>
          </div>
        ))}
      </div>
    </section>
  );
}

window.Process = Process;
