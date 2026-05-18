<script setup>
const artists = [
  { name: 'Morat', img: 'https://www.entradas.com/obj/media/ES-eventim/galery/kuenstler/m/Morat3.jpg' },
  { name: 'Nathy Peluso', img: 'https://news.baued.es/wp-content/uploads/2021/07/Nathy-Peluso-Festival-de-Pedralbes-%C2%A9-Thomas-Raimondi-1-OPT.jpeg' },
  { name: 'Rozalén', img: 'https://www.cadenadial.com/wp-content/uploads/2025/11/FotoJet-2025-11-24T121735.581.jpg' },
  { name: 'Raphael', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/RAPHAEL%20%28cropped%29.JPG' },
  { name: 'Rauw Alejandro', img: 'https://e01-elmundo.uecdn.es/assets/multimedia/imagenes/2024/09/16/17264855852237.jpg' },
  { name: 'Feid', img: 'https://dynamicmedia.livenationinternational.com/h/f/x/20e705d7-06d4-41ec-9018-f80caed7296d.jpg?format=webp&width=3840&quality=75' },
  { name: 'Chambao', img: 'https://s1.abcstatics.com/lavozdigital/www/multimedia/provincia/2023/07/30/chambao(7)_xoptimizadax-U17355500832HxR-1200x840@abc.jpg' },
  { name: 'Marlena', img: 'https://los40.com/resizer/v2/GV7LFV5M6NDXVB5D67IQ2ZVN2A.jpg?auth=2d0d413d79434fc88a3a90a4d5fc85860c53df9ded8bde86164b514625287717&quality=70&width=1200&height=544&focal=1360,795' },
  { name: 'Paula Mattheus', img: 'https://image.europafm.com/clipping/cmsimages01/2023/10/17/7DDE18D6-351B-4683-BD53-FB50FDBEC045/paula-mattheus-evento-madrid-2022_104.jpg?crop=3648,3648,x766,y0&width=1200&height=1200&optimize=low&format=webply' },
]


const tapeVariants = [
  { ax: '-8px', ay: '-3px', ar: '-10deg', bx: '7px', by: '2px', br: '7deg' },
  { ax: '10px', ay: '2px', ar: '6deg', bx: '-9px', by: '-2px', br: '-8deg' },
  { ax: '-2px', ay: '6px', ar: '-4deg', bx: '12px', by: '4px', br: '11deg' },
  { ax: '7px', ay: '-5px', ar: '-13deg', bx: '-4px', by: '5px', br: '5deg' },
  { ax: '-12px', ay: '4px', ar: '9deg', bx: '9px', by: '-5px', br: '-12deg' },
]

const getTapeStyle = (index) => {
  const variant = tapeVariants[index % tapeVariants.length]

  return {
    '--tape-a-x': variant.ax,
    '--tape-a-y': variant.ay,
    '--tape-a-r': variant.ar,
    '--tape-b-x': variant.bx,
    '--tape-b-y': variant.by,
    '--tape-b-r': variant.br,
  }
}
</script>

<template>
  <section class="artists artists-v3" id="artistas" data-screen-label="03 Artistas">
    <div class="artists-inner">
      <div class="artists-head v3-head">
        <div>
          <h2 class="section-title section-title--two-lines reveal"><span>Artistas que</span><span>han confiado</span></h2>
        </div>
      </div>
      <div class="artist-wall-scroll">
        <div class="artist-wall">
          <a
            v-for="(artist, index) in artists"
          :key="artist.name"
          href="#"
          class="artist-poster reveal"
          data-cursor="hover"
          :style="{ transitionDelay: `${index * 38}ms`, ...getTapeStyle(index) }"
            @click.prevent
          >
            <span class="tape tape-a"></span>
            <span class="tape tape-b"></span>


            <figure class="artist-polaroid">
              <div class="artist-photo">
                <img :src="artist.img" :alt="`${artist.name} en directo`" loading="lazy" />
                <span class="poster-shade"></span>
              </div>
              <figcaption>
                <h3>{{ artist.name }}</h3>
              </figcaption>
            </figure>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
