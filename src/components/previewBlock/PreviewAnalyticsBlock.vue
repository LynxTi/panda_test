<template>
  <div class="preview-analytics-block">
    <div
      class="preview-analytics-block__item"
      v-for="item in analyticItems"
      :key="item"
    >
      <div class="preview-analytics-block__item-title sub-text">
        {{item.title}}
      </div>
      <div class="preview-analytics-block__item-content text-normal">
        {{item.value}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PrewiewAnalyticsBloc',
  data () {
    return {
      analyticItems: null
    }
  },
  created() {
    this.analyticItems = this.getAnalytikItems()
  },
  methods: {
    getAnalytikItems() {
      return [
        {
          title: 'Holders',
          value: '1,601,211'
        },
        {
          title: 'Market Cap',
          value: '$4,389,354.24'
        },
        {
          title: 'Circulating supply',
          value: '$24,125,624'
        },
        {
          title: 'Price',
          value: '$13,114'
        },
        {
          title: 'Backing',
          value: '$2,985'
        },
        {
          title: 'Holders',
          value: '1,601,211'
        }
      ]
    }
  }
}
</script>

