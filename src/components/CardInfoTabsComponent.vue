<template>
  <div class="col " style=" padding-top:34px">
    <div
      class="text-h5 text-weight-bold"
      style="padding-left:20px; padding-right:20px;"
    >
      {{ card.title }}
    </div>
    <div>
      <div style="position:relative; ">
        <div class="q-pt-lg " style="padding-left:20px;padding-right:20px; ">
          <q-tabs
            v-model="tab"
            align="left"
            indicator-color="primary"
            active-color="primary"
            :breakpoint="0"
          >
            <q-tab
              name="advantages"
              label="Преимущества"
              class="text-capitalize q-px-none text-weight-bold "
            />
            <q-tab
              name="terms"
              label="Условия"
              class="text-capitalize q-px-none q-ml-lg text-weight-bold"
            />
          </q-tabs>
        </div>
        <div class="separator"></div>
      </div>

      <div
        style="padding-left:20px; padding-right:20px; min-height:200px; position:relative"
      >
        <q-tab-panels
          v-if="!loading"
          v-model="tab"
          animated
          class="bg-transparent"
        >
          <q-tab-panel name="advantages" class="q-px-none">
            <q-item
              class="q-pl-none"
              v-for="(adv, index) in card.advantages"
              :key="`adv_${index}`"
            >
              <q-item-section avatar style="min-width:24px">
                <q-avatar
                  size="24px"
                  icon="check"
                  color="white"
                  text-color="primary"
                />
              </q-item-section>

              <q-item-section>
                <q-item-label v-html="adv.info" />
              </q-item-section>
            </q-item>

            <q-item
              class="q-pl-none"
              v-for="(adv, index) in addAdv"
              :key="`adv_add_${index}`"
            >
              <q-item-section avatar style="min-width:40px" />
              <q-item-section>
                <q-item-label class="text-secondary" style="font-size:11px"
                  ><sup>*</sup>{{ adv.add }}
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-tab-panel>
          <q-tab-panel name="terms" class="q-px-none">
            <q-item
              class="q-pl-none"
              v-for="(adv, index) in card.terms"
              :key="`adv_${index}`"
            >
              <q-item-section>
                <q-item-label
                  class="text-secondary"
                  style="font-size:12px"
                  v-html="adv.info.title"
                />
                <q-item-label v-html="adv.info.text" />
              </q-item-section>
            </q-item>
            <q-item
              class="q-pl-none"
              v-for="(adv, index) in addTer"
              :key="`adv_add_${index}`"
            >
              <q-item-section>
                <q-item-label class="text-secondary" style="font-size:11px"
                  ><sup>*</sup>{{ adv.add }}
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-tab-panel>
        </q-tab-panels>

        <q-inner-loading :showing="loading" class="bg-transparent">
          <q-spinner size="50px" color="primary" />
        </q-inner-loading>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  ref,
  Ref,
  computed,
  watch,
  onMounted
} from '@vue/composition-api'

import { CardInfo } from './models'

export default defineComponent({
  name: 'CardInfo',
  props: {
    card: {
      type: (Object as unknown) as PropType<CardInfo>,
      reqquired: true
    }
  },
  setup(props) {
    const tab: Ref<string> = ref('advantages')

    const addAdv = computed(() => {
      if (!props.card) return []
      return props.card.advantages.filter(item => {
        return item.add
      })
    })
    const addTer = computed(() => {
      if (!props.card) return []
      return props.card.terms.filter(item => {
        return item.add
      })
    })

    const loading: Ref<boolean> = ref(true)

    watch(
      () => props.card,
      () => {
        loading.value = true
        setTimeout(() => {
          loading.value = false
        }, 500)
      }
    )
    onMounted(() => {
      loading.value = false
    })

    return { tab, addAdv, addTer, loading }
  }
})
</script>

<style lang="sass" scoped>
.separator
  position: absolute;
  left: 20px;
  right: 0;
  height: 1px;
  background-color: rgba(0,0,0,0.1)
</style>
