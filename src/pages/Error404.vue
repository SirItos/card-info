<template>
  <div class="fullscreen main-background  q-pa-md flex flex-center">
    <div class="flex column items-center">
      <div style="width:66px; opacity:0.2" class="q-mb-lg">
        <q-img src="icons/sadStory.svg" no-default-spinner></q-img>
      </div>
      <div class="q-mb-md text-weight-bold text-h6">
        Приносим свои извинения
      </div>
      <div
        class="text-weight-medium"
        style="color:rgba(0,0,0,0.5); font-size:16px"
      >
        Сервис временно не доступен.
      </div>
    </div>
    <div class="fixed-bottom q-px-md q-pb-md">
      <q-btn
        color="white"
        text-color="dark"
        label="Закрыть"
        padding="16px"
        class="full-width text-weight-bold elevation-0"
        style="border-radius:10px;
      box-shadow:0px 0px 16px rgba(0, 0, 0, 0.05)"
        no-caps
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'Error404'
})
</script>
