<script setup>
import { reactive, ref } from 'vue'

const form = reactive({ name: '', email: '', phone: '', project: '', need: '', message: '' })
const status = ref('')
const needs = ['Diseño + producción', 'Merch para gira', 'Stand de festival', 'Tienda online', 'Pop-up / activación', 'Todo el 360º']

const submit = () => {
  if (!form.name || !form.email || !form.message) {
    status.value = 'error'
    return
  }
  status.value = 'sending'
  window.setTimeout(() => { status.value = 'ok' }, 900)
}
</script>

<template>
  <section class="contact contact-v3" id="contacto" data-screen-label="06 Contacto">
    <div class="contact-poster reveal">
      <span class="tape tape-a"></span>
      <img src="https://instagram.fvlc4-1.fna.fbcdn.net/v/t51.82787-15/689168874_18070038434675974_5935405393194176846_n.jpg?stp=dst-jpg_e35_p1080x1080_tt6&_nc_cat=102&ig_cache_key=Mzg5MjA2MTQ4NTQ4OTM1NzY1NA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMzA3Mi5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=br_T_e8a1dAQ7kNvwG_Kcpm&_nc_oc=Adq-jRydVyX_DMBHc6AzX_EKj9NUJKJLUQGRd0iCzRhduYbig28bh-g730OEHpWvqg0&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fvlc4-1.fna&_nc_gid=9TLWm3AFwBM6tM-3dtmgzg&_nc_ss=7a22e&oh=00_Af74qzt9psSoKoyfek0mGwe3YTOcb4AdH3Dwr6wr87vqpg&oe=6A0A2379" alt="Concierto y público" />
      <!-- <strong>BRIEF / DROP</strong> -->
    </div>

    <form class="form-box form-v3 reveal d1" @submit.prevent="submit">
      <div class="form-box-head">
        <div class="form-box-tag">Nuevo proyecto</div>
        <h2 class="form-box-title">Cuéntanos tu idea</h2>
      </div>

      <div class="form-grid">
        <div class="ff"><label for="name" class="ff-label">Nombre<span class="ff-req">*</span></label><input id="name" v-model="form.name" class="ff-input" placeholder="Tu nombre" data-cursor="hover" /></div>
        <div class="ff"><label for="email" class="ff-label">Email<span class="ff-req">*</span></label><input id="email" v-model="form.email" type="email" class="ff-input" placeholder="tu@email.com" data-cursor="hover" /></div>
        <div class="ff"><label for="phone" class="ff-label">Teléfono</label><input id="phone" v-model="form.phone" type="tel" class="ff-input" placeholder="+34 ..." data-cursor="hover" /></div>
        <div class="ff"><label for="project" class="ff-label">Artista / Marca</label><input id="project" v-model="form.project" class="ff-input" placeholder="Nombre del proyecto" data-cursor="hover" /></div>
        <div class="ff ff-full"><label for="need" class="ff-label">Qué necesitas</label><select id="need" v-model="form.need" class="ff-input" data-cursor="hover"><option value="">Selecciona una opción</option><option v-for="need in needs" :key="need" :value="need">{{ need }}</option></select></div>
        <div class="ff ff-full"><label for="message" class="ff-label">Brief<span class="ff-req">*</span></label><textarea id="message" v-model="form.message" rows="5" class="ff-input ff-textarea" placeholder="Fechas, referencias, tipo de prendas, volumen, ideas, estilo..." data-cursor="hover"></textarea></div>
      </div>

      <div class="form-cta">
        <div class="form-status" :class="{ ok: status === 'ok', err: status === 'error' }">
          <template v-if="status === 'sending'">ENVIANDO...</template>
          <template v-else-if="status === 'ok'">✓ BRIEF RECIBIDO — TE ESCRIBIMOS EN 48H</template>
          <template v-else-if="status === 'error'">⚠ FALTAN CAMPOS OBLIGATORIOS</template>
          <template v-else>Respuesta en menos de 48h</template>
        </div>
        <button type="submit" class="btn-primary" data-cursor="hover">ENVIAR</button>
      </div>
    </form>
  </section>
</template>
