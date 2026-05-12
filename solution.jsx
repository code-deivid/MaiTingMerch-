// solution.jsx — 360º editorial service grid
const SOLUTION_ITEMS = [
  { num: '01', title: 'Diseño Creativo', desc: 'Dirección de arte y diseño gráfico para colecciones que cuentan la historia del artista o la marca.', col: 'span 4', row: 'span 2', media: true, mediaLabel: 'STUDIO — moodboard / sketches' },
  { num: '02', title: 'Producción Propia', desc: 'Taller propio de +3.000 m² con DTG, serigrafía, sublimación y bordado de alta densidad.', col: 'span 4', row: 'span 1' },
  { num: '03', title: 'Materiales Premium', desc: 'Algodón orgánico, telas pesadas y tintas water-based. Calidad cuidada en cada prenda.', col: 'span 4', row: 'span 1' },
  { num: '04', title: 'Tiendas Online', desc: 'E-commerce a medida con la identidad del cliente, pasarela y dashboard de ventas en tiempo real.', col: 'span 3', row: 'span 1' },
  { num: '05', title: 'Packaging', desc: 'Cajas, etiquetas y polybags personalizados. Cada unboxing es parte del producto.', col: 'span 3', row: 'span 1' },
  { num: '06', title: 'Logística y Envíos', desc: 'Almacén, picking, envíos nacionales e internacionales y devoluciones gestionadas.', col: 'span 6', row: 'span 1', media: true, mediaLabel: 'WAREHOUSE — pallets / picking floor' },
  { num: '07', title: 'Stands de Festival', desc: 'Diseñamos, fabricamos y operamos puestos físicos con personal entrenado.', col: 'span 6', row: 'span 2', media: true, mediaLabel: 'BOOTH — festival merch stand' },
  { num: '08', title: 'Personal de Ventas', desc: 'Equipo propio en gira para conciertos, eventos y pop-ups.', col: 'span 3', row: 'span 1' },
  { num: '09', title: 'SEO, SEM y GEO', desc: 'Posicionamiento en Google y, con GEO, también en buscadores con IA: que tu marca aparezca como referencia cuando alguien pregunte por merch, artistas o festivales.', col: 'span 3', row: 'span 1' },
  { num: '10', title: 'Pop-ups & Experiencias', desc: 'Activaciones de marca, listening parties y lanzamientos exclusivos.', col: 'span 6', row: 'span 1' },
  { num: '11', title: 'Drops Limitados', desc: 'Ediciones numeradas y capsule collections pensadas para crear hype real.', col: 'span 3', row: 'span 1' },
  { num: '12', title: 'Análisis & Data', desc: 'Reporting completo de cada gira: stock, ventas, márgenes y productos más vendidos.', col: 'span 3', row: 'span 1' },
];

function ServiceCard({ item }) {
  const ref = React.useRef(null);
  const onMove = (e) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    ref.current.style.setProperty('--mx', `${e.clientX - r.left}px`);
    ref.current.style.setProperty('--my', `${e.clientY - r.top}px`);
  };
  return (
    <div
      ref={ref}
      className={`svc ${item.media ? 'has-media' : ''} reveal`}
      style={{ gridColumn: item.col, gridRow: item.row }}
      onMouseMove={onMove}
      data-cursor="hover"
    >
      {item.media && (
        <div className="svc-media">
          <div className="placeholder" data-label={item.mediaLabel} style={{ width: '100%', height: '100%' }}></div>
        </div>
      )}
      <div className="svc-content" style={item.media ? undefined : { display: 'contents' }}>
        <div className="svc-num">{item.num} / SERVICE</div>
        <div>
          <h3 className="svc-title">{item.title}</h3>
          <p className="svc-desc">{item.desc}</p>
        </div>
      </div>
    </div>
  );
}

function Solution() {
  return (
    <section className="section solution" id="solucion" data-screen-label="02 Solución 360º">
      <div className="solution-head">
        <div>
          <h2 className="section-title reveal">
            Un servicio<br/>360º para<br/>tu <em>merch</em>.
          </h2>
        </div>
        <div className="reveal d1">
          <p className="section-sub">
            Todo lo que necesita tu merchandising, en un solo equipo: diseño,
            producción, logística y venta — sin pasar el proyecto entre
            proveedores. Un único interlocutor de principio a fin.
          </p>
        </div>
      </div>

      <div className="solution-grid">
        {SOLUTION_ITEMS.map((it, i) => <ServiceCard key={i} item={it} />)}
      </div>
    </section>
  );
}

window.Solution = Solution;
