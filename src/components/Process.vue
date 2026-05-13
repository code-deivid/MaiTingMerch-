<script setup>
const steps = [
  { title: 'Diseño', desc: 'Si ya lo tienes, lo adaptamos. Si no, lo hacemos nosotros: concepto, gráfica, mockups y colección con identidad.' },
  { title: 'Producción', desc: 'Taller de 3.000 m², acabados, control de calidad, stock y capacidad para drops, giras y festivales.' },
  { title: 'Venta', desc: 'Online y física: e-commerce, stands, pop-ups, personal de venta, logística y lectura de datos.' },
]
</script>

<template>
  <section class="section process process-v3" id="proceso" data-screen-label="05 Método">
    <div class="spray-bg" aria-hidden="true"><span></span><span></span><span></span></div>
    <h2 class="section-title reveal">De la idea<br />al sold-out.</h2>
    <p class="section-sub reveal d1">Tres pasos fáciles de entender para cualquier artista: creamos el producto, lo fabricamos y lo ponemos a vender.</p>
    <div class="process-flow process-v3-flow">
      <template v-for="(step, index) in steps" :key="step.title">
        <article class="process-tile process-v3-tile" :class="{ 'is-sold-out': index === 2 }" >
          <span class="process-sticker">{{ ['IDEA', 'TALLER', 'SOLD OUT'][index] }}</span>
          <h3 class="process-title">{{ step.title }}</h3>
          <p class="process-desc">{{ step.desc }}</p>
        </article>
        <div v-if="index < steps.length - 1" class="process-graffiti-arrow" aria-hidden="true">➜</div>
      </template>
    </div>
  </section>
</template>
