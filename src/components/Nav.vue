<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'

const links = [
  { label: 'Servicios', target: 'solucion' },
  { label: 'Artistas', target: 'artistas' },
  { label: 'Festivales', target: 'festivales' },
  { label: 'Proceso', target: 'proceso' },
]

const activeSection = ref('solucion')
const isMenuOpen = ref(false)
let observer = null

const sectionIds = links.map((link) => link.target)

const closeMenu = () => {
  isMenuOpen.value = false
}

const setActiveSection = (target) => {
  activeSection.value = target
  closeMenu()
}

const observeSections = async () => {
  await nextTick()

  const sections = sectionIds
    .map((target) => document.getElementById(target))
    .filter(Boolean)

  if (!sections.length) return

  observer = new IntersectionObserver(
    (entries) => {
      const viewportAnchor = window.innerHeight * 0.36
      const bestEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => {
          const aDistance = Math.abs(a.boundingClientRect.top - viewportAnchor)
          const bDistance = Math.abs(b.boundingClientRect.top - viewportAnchor)
          return aDistance - bDistance
        })[0]

      if (bestEntry?.target?.id) {
        activeSection.value = bestEntry.target.id
      }
    },
    {
      root: null,
      threshold: [0, 0.08, 0.16, 0.28, 0.42, 0.6],
      rootMargin: '-18% 0px -58% 0px',
    },
  )

  sections.forEach((section) => observer.observe(section))
}

const onKeydown = (event) => {
  if (event.key === 'Escape') closeMenu()
}

watch(isMenuOpen, (open) => {
  document.body.classList.toggle('mobile-menu-open', open)
})

onMounted(() => {
  observeSections()
  window.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  observer?.disconnect()
  window.removeEventListener('keydown', onKeydown)
  document.body.classList.remove('mobile-menu-open')
})
</script>

<template>
  <nav class="nav" :class="{ 'is-menu-open': isMenuOpen }">
    <a href="#top" class="nav-logo" data-cursor="hover" aria-label="MaiTincMerch! Home" @click="closeMenu">
      <img src="/assets/logo.png" alt="MaiTincMerch!" class="nav-logo-img" />
    </a>

    <div class="nav-links" aria-label="Navegación principal">
      <a
        v-for="link in links"
        :key="link.target"
        :href="`#${link.target}`"
        class="nav-link"
        :class="{ 'is-active': activeSection === link.target }"
        data-cursor="hover"
        @click="setActiveSection(link.target)"
      >
        {{ link.label }}
      </a>
    </div>

    <a href="#contacto" class="nav-cta" data-cursor="hover" @click="closeMenu">
      Contacto
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
        <path d="M1 9L9 1M9 1H2M9 1V8" stroke="currentColor" stroke-width="1.2" />
      </svg>
    </a>

    <button
      class="nav-burger"
      type="button"
      data-cursor="hover"
      :aria-expanded="isMenuOpen"
      aria-controls="mobile-menu"
      aria-label="Abrir menú de navegación"
      @click="isMenuOpen = !isMenuOpen"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>

  </nav>

  <Teleport to="body">
    <div class="mobile-nav-overlay" :class="{ 'is-visible': isMenuOpen }" @click="closeMenu"></div>

    <aside id="mobile-menu" class="mobile-nav-panel" :class="{ 'is-visible': isMenuOpen }" aria-label="Menú móvil">
      <div class="mobile-nav-head">
        <img src="/assets/logo.png" alt="MaiTincMerch!" class="mobile-nav-logo" />
        <button class="mobile-nav-close" type="button" aria-label="Cerrar menú" @click="closeMenu">
          <span></span>
          <span></span>
        </button>
      </div>

      <div class="mobile-nav-links">
        <a
          v-for="link in links"
          :key="`mobile-${link.target}`"
          :href="`#${link.target}`"
          class="mobile-nav-link"
          :class="{ 'is-active': activeSection === link.target }"
          @click="setActiveSection(link.target)"
        >
          {{ link.label }}
        </a>
      </div>

      <a href="#contacto" class="mobile-nav-cta" @click="setActiveSection('contacto')">Contacto</a>
    </aside>
  </Teleport>
</template>
