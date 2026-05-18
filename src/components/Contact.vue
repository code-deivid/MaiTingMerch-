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
      <img src="https://i.pinimg.com/564x/ba/bc/69/babc690344890c4a102d215762edf0d1.jpg" alt="Concierto y público" />
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
