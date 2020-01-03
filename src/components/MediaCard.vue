<template>
  <div>
    <div v-for="(item, i) in items" :key="i" class="card">
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
            Nota media: {{ item.grade }}
          </span>
        </div>
      </div>
    </div>
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
