<script setup>
defineProps({ items: { type: Array, required: true } })
</script>

<template>
  <div class="ticker">
    <div class="ticker-track">
      <span v-for="loop in 2" :key="loop">
        <template v-for="item in items" :key="`${loop}-${item}`">
          <span>{{ item }}</span>
          <span class="star">✦</span>
        </template>
      </span>
    </div>
  </div>
</template>
