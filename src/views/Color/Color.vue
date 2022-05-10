<template>
  <section>
    <h1 class="mb-7">Color</h1>

    <div class="ml-3 mb-5">
      <h2>Primary Colors</h2>
      <div class="row">
        <div class="col-md-6 col-lg-3 mb-3">
          <color-card :scale="scale" color="primary"/>
        </div>
        <div class="col-md-6 col-lg-3 mb-3">
          <color-card :scale="scaleB" color="secondary" :light-color="true"/>
        </div>
        <div class="col-md-6 col-lg-3 mb-3">
          <color-card :scale="scale" color="primary-dark"/>
        </div>
      </div>
    </div>

    <div class="ml-3 mb-5">
      <h2>States</h2>
      <div class="row">
        <div class="col-md-6 col-lg-3 mb-3">
          <color-card :scale="scaleB" color="success"/>
        </div>
        <div class="col-md-6 col-lg-3 mb-3">
          <color-card :scale="scale" color="info"/>
        </div>
        <div class="col-md-6 col-lg-3 mb-3">
          <color-card :scale="scale" color="warning" :light-color="true"/>
        </div>
        <div class="col-md-6 col-lg-3 mb-3">
          <color-card :scale="scale" color="error"/>
        </div>
      </div>
    </div>

    <div class="ml-3 mb-5">
      <h2>Neutral Colors</h2>
      <div class="row">
        <div class="col-md-6 col-lg-3 mb-3">
          <color-card :scale="scaleNeutral" color="neutral"/>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import ColorCard from "./components/ColorCard.vue"

export default {
  components: { ColorCard },
  name: 'Color',
  data() {
    return {
      scale: [100, 80, 60, 15],
      scaleB: [100, 80, 60],
      scaleNeutral: [100, 70, 50, 25, 10, '05', '00']
    }
  },
  methods: {
    setColorList() {
      this.scale.forEach(gradant => {
        this.setHTMLHexColor('primary', gradant)
        this.setHTMLHexColor('primary-dark', gradant)
        this.setHTMLHexColor('info', gradant)
        this.setHTMLHexColor('warning', gradant)
        this.setHTMLHexColor('error', gradant)
      })

      this.scaleB.forEach(gradant => {
        this.setHTMLHexColor('secondary', gradant)
        this.setHTMLHexColor('success', gradant)
      })

      this.scaleNeutral.forEach(gradant => {
        this.setHTMLHexColor('neutral', gradant)
      })
    },
    colorToHex(color) {
      const rgba2hex = (rgba) => `#${rgba.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+\.{0,1}\d*))?\)$/).slice(1).map((n, i) => (
          i === 3 ?
          Math.round(parseFloat(n) * 255) :
          parseFloat(n)).toString(16).padStart(2, '0').replace('NaN', '')).join('')}`
      return rgba2hex(color)
    },
    setHTMLHexColor(color, gradant) {
      let element = document.getElementById(`bg-${color}-${gradant}`)
      let hex = this.colorToHex(getComputedStyle(element).backgroundColor).toUpperCase()
      document.getElementById(`bg-${color}-${gradant}-hex`).innerHTML = hex
    }
  },
  mounted() {
    this.setColorList()
  }
}
</script>
