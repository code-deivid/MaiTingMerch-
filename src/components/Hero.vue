<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

const scrollY = ref(0)
const onScroll = () => { scrollY.value = window.scrollY }

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <section class="hero hero-v3" id="top" data-screen-label="01 Hero">
    <div class="hero-bg" :style="{ transform: `translateY(${scrollY * 0.18}px) scale(${1 + scrollY * 0.00025})` }">
      <img src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1800&q=80" alt="Concierto urbano" />
    </div>
    <div class="hero-photo-stack" aria-hidden="true">
      <img class="hero-polaroid p1" src="https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=900&q=80" alt="" />
      <img class="hero-polaroid p2" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80" alt="" />
      <img class="hero-polaroid p3" src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80" alt="" />
    </div>
    <div class="hero-inner" :style="{ transform: `translateY(${scrollY * -0.08}px)` }">
      <div class="hero-kicker">MAI TINC MERCH!</div>
      <h1 class="hero-title">
        <span class="word"><span>MERCH</span></span>
        <span class="word"><span>PARA</span></span><br />
        <em>artistas.</em>
      </h1>
      <div class="hero-bottom">
        <p class="hero-sub">Diseño, producción, logística y venta para artistas, festivales y marcas que quieren lanzar drops con presencia de calle, acabado premium y energía de sold-out.</p>
        <div class="hero-cta-wrap">
          <a href="#contacto" class="btn-primary" data-cursor="hover">TU MERCH</a>
        </div>
      </div>
    </div>
  </section>
</template>
