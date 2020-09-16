<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container class="main-background">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'MainLayout',
  setup() {
    return {}
  }
})
</script>
