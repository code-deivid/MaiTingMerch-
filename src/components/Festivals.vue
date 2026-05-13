<script setup>
const festivals = [
  { name: 'Love To Rock', city: 'València', img: 'https://lovetorockfestival.es/wp-content/uploads/2024/12/1366-16.jpg' },
  { name: 'Viña Rock', city: 'Villarrobledo', img: 'https://s10.s3c.es/imag/_v0/1920x1048/a/2/d/EuropaPress_6574901_vina_rock.jpg' },
  { name: 'Medusa', city: 'Cullera', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Escenario%20principal%20Medusa%20Sunbeach%20Festival%202015.jpg' },
  { name: 'ZEVRA', city: 'Cullera', img: 'https://applications-media.feverup.com/image/upload/f_auto,w_1200,h_900,c_fill/fever2/plan/photo/2a85788a-147e-11f0-b042-c2bd9fb42191.jpg' },
]
</script>

<template>
  <section class="festivals festivals-v3" id="festivales" data-screen-label="04 Festivales">
    <div class="festivals-head v3-head">
      <div>
        <h2 class="section-title section-title--two-lines reveal"><span>Festivales</span><span>con merch vivo</span></h2>
      </div>
    </div>
    <div class="festival-wall">
      <article v-for="(festival, index) in festivals" :key="festival.name" class="festival-poster reveal" data-cursor="hover" :style="{ transitionDelay: `${index * 70}ms` }">
        <img :src="festival.img" :alt="`${festival.name} festival`" loading="lazy" />
        <div class="festival-label">
          <h3>{{ festival.name }}</h3>
          <span>{{ festival.city }} · Online + físico</span>
        </div>
      </article>
    </div>
  </section>
</template>
