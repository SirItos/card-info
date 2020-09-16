<template>
  <div style="max-width:100%; ">
    <swiper
      ref="swiperComponentRef"
      class="swiper component"
      :options="swiperComponentOption"
      @slideChange="changeSlide"
    >
      <swiper-slide v-for="(image, n) in images" :key="`slide_${n}`" style="">
        <div style="height:166px">
          <img :src="`cards/${image}`" :alt="image" style="max-height:100%" />
        </div>
        <!-- <div>
          <q-img
            style="height:166px"
            :src="`cards/${image}`"
            spinner-color="primary"
            contain
          />
        </div> -->
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  defineComponent,
  ref,
  computed,
  Ref,
  PropType
} from '@vue/composition-api'
import SwiperClass, { SwiperOptions } from 'swiper'

import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

export default defineComponent({
  name: 'CardSwiperComponent',
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    images: {
      type: (Array as unknown) as PropType<string[]>,
      required: true
    }
  },
  setup(props, { emit }) {
    const swiperComponentRef: Ref<any> = ref<any>(null)
    const swiperComponentinstance = computed(
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      () => swiperComponentRef.value?.$swiper as SwiperClass
    )
    const swiperComponentOption: SwiperOptions = {
      slidesPerView: 'auto',
      centeredSlides: true,
      loop: true,
      // loopAdditionalSlides: 5,
      // loopedSlides: 5,
      spaceBetween: 20
    }

    const changeSlide = () => {
      emit('changeCard', swiperComponentinstance.value.realIndex)
    }

    return {
      swiperComponentRef,
      swiperComponentOption,
      changeSlide
    }
  }
})
</script>

<style lang="sass">
.swiper-slide
   width: 70%
</style>
