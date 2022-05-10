<template>
  <div class="card">
    <div v-for="(gradant, index) in scale" v-bind:key="index"
      :id="`bg-${color}-${gradant}`"
      v-bind:class="`bg-${color}-${gradant} p-3`">
      <section v-if="index === 0" class="flex-space-between mb-2">
        <h5 class="bold">{{color}}</h5>
        <span :id="`bg-${color}-${gradant}-hex`"></span>
      </section>
      <div class="flex-space-between">
        <small>bg-{{color}}-{{gradant}}</small>
        <div v-if="index === 0" class="rounded p-1" v-bind:class="[ lightColor ? 'bg-neutral-50' : 'bg-neutral-25']">
          <small :class="`${color}-${gradant} bold`">{{color}}-{{gradant}}</small>
        </div>
        <span v-else :id="`bg-${color}-${gradant}-hex`"></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'color-card',
  props: {
    scale: Array,
    color: String,
    lightColor: {
      default: false,
      type: Boolean
    }
  }
}
</script>