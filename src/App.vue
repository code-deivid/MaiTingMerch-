<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import Nav from './components/Nav.vue'
import Hero from './components/Hero.vue'
import Ticker from './components/Ticker.vue'
import Solution from './components/Solution.vue'
import Artists from './components/Artists.vue'
import Festivals from './components/Festivals.vue'
import Process from './components/Process.vue'
import Contact from './components/Contact.vue'

const showGrain = true
const cursorEnabled = ref(true)
const ring = ref(null)
const dot = ref(null)
const tickerItems = [
  'STREET MERCH', 'DROPS LIMITADOS', 'GOLD EDITION', 'TOUR SUPPLY',
  'STANDS DE FESTIVAL', 'PACKAGING', 'LOGÍSTICA', 'POP-UPS',
  'SOLD OUT ENERGY', 'GRAFFITI GOLD',
]

let cursorRaf = 0
let x = 0
let y = 0
let rx = 0
let ry = 0
let revealObserver = null

const onMove = (event) => {
  x = event.clientX
  y = event.clientY
  if (dot.value) {
    dot.value.style.left = `${x}px`
    dot.value.style.top = `${y}px`
  }
}

const onOver = (event) => {
  const target = event.target.closest('[data-cursor="hover"], a, button, input, textarea, select')
  ring.value?.classList.toggle('hover', Boolean(target))
}

const tickCursor = () => {
  rx += (x - rx) * 0.18
  ry += (y - ry) * 0.18
  if (ring.value) {
    ring.value.style.left = `${rx}px`
    ring.value.style.top = `${ry}px`
  }
  cursorRaf = requestAnimationFrame(tickCursor)
}

onMounted(() => {
  const root = document.documentElement
  root.style.setProperty('--gold', '#d6a738')
  root.style.setProperty('--gold-soft', '#d6a73829')
  root.style.setProperty('--gold-glow', '#d6a7384D')
  root.style.setProperty('--display', "'Archivo Black', 'Archivo Black', Impact, sans-serif")

  x = window.innerWidth / 2
  y = window.innerHeight / 2
  rx = x
  ry = y

  if (cursorEnabled.value) {
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    cursorRaf = requestAnimationFrame(tickCursor)
  }

  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('in')
    })
  }, { threshold: 0.12, rootMargin: '0px 0px -10% 0px' })

  document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element))
})

onBeforeUnmount(() => {
  cancelAnimationFrame(cursorRaf)
  window.removeEventListener('mousemove', onMove)
  window.removeEventListener('mouseover', onOver)
  revealObserver?.disconnect()
})
</script>

<template>
  <div v-if="showGrain" class="noise"></div>
  <div class="vignette"></div>
  <template v-if="cursorEnabled">
    <div ref="ring" class="cursor"></div>
    <div ref="dot" class="cursor-dot"></div>
  </template>

  <Nav />
  <Hero />
  <Ticker :items="tickerItems" />
  <Solution />
  <Artists />
  <Festivals />
  <Process />
  <Contact />

  <footer class="footer">
    <div class="footer-cols">
      <div class="footer-col">
        <div class="footer-col-label">Contacto</div>
        <a href="mailto:hola@maitincmerch.com" data-cursor="hover">hola@maitincmerch.com</a>
        <a href="tel:+34000000000" data-cursor="hover">+34 000 000 000</a>
      </div>
      <div class="footer-col">
        <div class="footer-col-label">Síguenos</div>
        <div class="footer-socials">
          <a href="https://instagram.com" data-cursor="hover" aria-label="Instagram" class="footer-social">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
            </svg>
            <span>@maitincmerch</span>
          </a>
          <a href="https://facebook.com" data-cursor="hover" aria-label="Facebook" class="footer-social">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
            <span>/maitincmerch</span>
          </a>
        </div>
      </div>
      <div class="footer-col">
        <div class="footer-col-label">Empresa</div>
        <a href="#solucion" data-cursor="hover">Servicios</a>
        <a href="#contacto" data-cursor="hover">Contacto</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 MAITINCMERCH! · TODOS LOS DERECHOS RESERVADOS</span>
      <div>
        <a href="#" data-cursor="hover">Privacidad</a>
        <a href="#" data-cursor="hover">Cookies</a>
        <a href="#" data-cursor="hover">Aviso legal</a>
      </div>
    </div>
  </footer>
</template>
