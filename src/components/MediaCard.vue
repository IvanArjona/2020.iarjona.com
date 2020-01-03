<template>
  <div>
    <template v-for="(item, i) in items">
      <div :key="i" class="card" @mousedown="clickCard(item)" :class="{pointer: item.link}" :title="item.description">
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
      </div>
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
.pointer {
  cursor: pointer;
}
</style>
