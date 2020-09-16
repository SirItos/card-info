<template>
  <q-page class="column q-pt-md">
    <mrm-card-swiper @changeCard="changeCard" :images="cardImages" />

    <mrm-card-info :card="activeCard" style="margin-bottom:72px" />

    <div class="q-px-md fixed-bottom q-pb-md">
      <q-btn
        type="a"
        href="bp://services?service=requestAlfaCreditCard"
        color="primary"
        label="Оформить карту"
        padding="16px"
        class="full-width"
        style="border-radius:10px"
        no-caps
      />
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, computed } from '@vue/composition-api'
import { CardInfo } from 'components/models.ts'

const сards: CardInfo[] = [
  {
    url: 'mir.png',
    title: 'МКБ «Можно больше»',
    terms: [
      {
        info: 'Годовое обслуживание от 499 руб.<sup>*</sup>',
        add:
          'Карта обслуживается бесплатно, если совершаются покупки кредитными средствами на общую сумму 120 тыс. руб. за каждый предыдущий год пользования картой'
      },
      { info: 'Процентная ставка от 21% в год' },
      { info: 'Срок действия карты 6 лет' },
      { info: 'Кэшбэк 5% в отдельных категориях  1% за все покупки' }
    ],
    advantages: [
      {
        info: 'До 123 дней льготный период<sup>*</sup>',
        add:
          'Льготный период распространяется только на покупку товаров и услуг, если вы снимаете деньги с карты, льготный период прекращается'
      },
      {
        info: '0 руб. за снятие наличныхc<sup>**</sup>',
        add: 'До 50% от кредитного лимита в месяц'
      },
      { info: 'До 800 тыс. руб. сумма кредитного лимита' }
    ]
  },
  {
    url: 'tinkoff_platinum.png',
    title: 'Тинькофф Платинум',
    terms: [
      {
        info: 'Годовое обслуживание 590 руб.'
      },
      {
        info: 'Процентная ставка от 12% в год'
      },
      {
        info: 'СМС информирование 59 руб. в мес'
      },
      {
        info: 'Срок действия карты 5 лет'
      },
      {
        info: 'Кэшбэк 5% в отдельных категориях 1% за все покупки'
      }
    ],
    advantages: [
      {
        info:
          'До 12 мес. беспроцентный период за технику, одежду и другие покупки'
      },
      {
        info:
          'До 120 дней беспроцентный период за погашение картой других кредитов'
      },
      {
        info: 'До 55 дней Беспроцентный период за любые покупки'
      },
      {
        info: 'До 30% возвращается баллами с любой покупки'
      }
    ]
  },
  {
    url: 'tinkoff_drive.png',
    title: 'Тинькофф Драйв',
    terms: [
      {
        info: 'Годовое обслуживание 990 руб.'
      },
      {
        info: 'Процентная ставка от 15% в год'
      },
      {
        info: 'СМС информирование 59 руб. в мес'
      },
      {
        info: 'Срок действия карты 5 лет'
      }
    ],
    advantages: [
      {
        info: '10% бонусами за покупки на АЗС'
      },
      {
        info: '5% бонусами за любые автоуслуги (автосервис, мойка, парковка'
      },
      {
        info: 'До 55 дней беспроцентный период за любые покупки'
      },
      {
        info:
          '120 дней беспроцентный период за погашение картой других кредитов'
      },
      {
        info:
          'До 12 месяцев беспроцентный период за технику, одежду и другие покупки в рассрочку'
      }
    ]
  },
  {
    url: 'alfa.png',
    title: 'Альфа бнак 100 дней',
    terms: [
      {
        info: 'Годовое обслуживание 1490 руб.'
      },
      {
        info: 'Процентная ставка от 14,99% в год'
      },
      {
        info: 'СМС информирование 59 руб. в мес.'
      },
      {
        info: 'Срок действия карты 5 лет'
      }
    ],
    advantages: [
      {
        info: 'До 100 дней беспроцентный период'
      },
      {
        info: '50 тыс. руб. в мес. снятие наличных без комиссии<sup>*</sup>',
        add: 'Для льготного периода 100 дней'
      },
      {
        info: 'До 500 тыс. руб сумма кредитного лимита'
      },
      {
        info: 'До 30% возвращается баллами с любой покупки'
      }
    ]
  }
]

export default defineComponent({
  name: 'PageIndex',
  components: {
    'mrm-card-swiper': () => import('components/CardSwiperComponent.vue'),
    'mrm-card-info': () => import('components/CardInfoTabsComponent.vue')
  },
  setup() {
    const cardImages = computed(() => {
      return сards.map((card: CardInfo) => {
        return card.url
      })
    })

    const activeCard: Ref<CardInfo> = ref(сards[0])
    const changeCard = (val: number) => {
      activeCard.value = сards[val]
    }

    return { сards, cardImages, activeCard, changeCard }
  }
})
</script>
