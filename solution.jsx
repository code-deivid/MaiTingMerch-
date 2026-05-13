// solution.jsx — less grid, more streetwear magazine / service cards
const SERVICE_BLOCKS = [
  { title: 'Diseño de colección', text: 'Si el artista no tiene diseño, lo creamos: dirección de arte, mockups, piezas para tour, cápsulas limitadas y estética lista para vender.' },
  { title: 'Producción propia', text: 'Fabricamos con control de calidad, acabados, tallaje, etiquetado, packaging y ritmo preparado para campañas grandes.' },
  { title: 'Venta + logística', text: 'Activamos tienda online, venta física, stands, pop-ups, stock, envíos y reporting para saber qué se vende y cuándo reponer.' },
];

function Solution() {
  return (
    <section className="section solution solution-v3" id="solucion" data-screen-label="02 Solución 360º">
      <div className="solution-head v3-head">
        <div>
          <div className="section-tag reveal">SERVICIO 360º</div>
          <h2 className="section-title reveal">Todo el drop,<br/>sin pasar por<br/><em>10 proveedores.</em></h2>
        </div>
        <p className="section-sub reveal d1">
          No es una lista de servicios: es una cadena completa pensada para artistas, giras y festivales. Diseño, producción, venta y control del merch desde una sola mesa.
        </p>
      </div>

      <div className="service-editorial">
        <div className="service-big-photo reveal">
          <span className="tape tape-a"></span>
          <span className="tape tape-b"></span>
          <img src="https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1600&q=80" alt="Producción de camisetas streetwear" />
          <strong>DROP READY</strong>
        </div>
        <div className="service-stack">
          {SERVICE_BLOCKS.map((s, i) => (
            <article className="service-scrap reveal" key={s.title} style={{ transitionDelay: `${i * 60}ms` }}>
              <span className="service-mark">{['DISEÑO','PRODUCCIÓN','VENTA'][i]}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Solution = Solution;
