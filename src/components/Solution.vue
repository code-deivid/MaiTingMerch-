<script setup>
const serviceBlocks = [
  { title: 'Diseño de colección', text: 'Si el artista no tiene diseño, lo creamos: dirección de arte, mockups, piezas para tour, cápsulas limitadas y estética lista para vender.' },
  { title: 'Producción propia', text: 'Fabricamos con control de calidad, acabados, tallaje, etiquetado, packaging y ritmo preparado para campañas grandes.' },
  { title: 'Venta + logística', text: 'Activamos tienda online, venta física, stands, pop-ups, stock, envíos y reporting para saber qué se vende y cuándo reponer.' },
]
</script>

<template>
  <section class="section solution solution-v3" id="solucion" data-screen-label="02 Solución 360º">
    <img class="solution-logo-bg" src="/assets/logo.png" alt="" aria-hidden="true" />
    <div class="solution-head v3-head">
      <div>
        <h2 class="section-title reveal">Servicio 360°,<br />sin pasar por<br /><em>proveedores.</em></h2>
      </div>
    </div>
    <div class="service-editorial">
      <div class="service-big-photo reveal">
        <span class="tape tape-a"></span>
        <span class="tape tape-b"></span>
        <img src="https://pmkideas.com/blog-ideas-regalos/wp-content/uploads/2024/04/ImagenFestivales.jpg" alt="Producción de camisetas streetwear" />
        <strong>MERCH READY</strong>
      </div>
      <div class="service-stack">
        <article v-for="(service, index) in serviceBlocks" :key="service.title" class="service-scrap reveal" :class="`service-scrap--${index + 1}`" :style="{ transitionDelay: `${index * 60}ms` }">
          <span class="service-mark">{{ ['DISEÑO', 'PRODUCCIÓN', 'VENTA'][index] }}</span>
          <h3>{{ service.title }}</h3>
          <p>{{ service.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
