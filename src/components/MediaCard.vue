<template>
  <div>
    <template v-for="(item, i) in items">
      <component :key="i" :is="item.link ? 'a' : 'div'"
          :href="item.link" target="_blank" class="card" :title="item.description" :rel="item.rel">
        <img class="logo" v-if="item.logo" :src="item.logo">
        <div class="content">
          <span :class="{bold}">
              {{ item.title }}
          </span>
          <div class="secondary" v-if="item.place">
            <span class="place">{{ item.place }}</span>
            <span class="date">
              {{ item.date }}
            </span>
            <span class="grade" v-if="item.grade">
              Nota: {{ item.grade }}/10
            </span>
          </div>
        </div>
      </component>
      </template>
  </div>
</template>

<script>

export default {
  name: 'MediaCard',
  props: {
    items: Array,
    bold: {
      type: Boolean,
      default: true,
    }
  },
  methods: {
    clickCard(card) {
      if (card.link) {
        open(card.link, '_blank');
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  border: 1px solid;
  border-radius: 2px;
  border-color: #009688;
  display: flex;
  margin: 5px;
}
a.card:link, a.card:visited {
  color: inherit;
  text-decoration: none;
}
.card:hover {
  background: #e7fefc;
}
.logo {
  width: 64px;
  height: 64px;
  flex-basis: auto;
  margin: 2px;
}
.content {
  margin: 6px;
  align-items: left;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.secondary {
  display: flex;
  justify-content: space-between;
  & > * {
    flex-basis: auto;
  }
}
</style>
