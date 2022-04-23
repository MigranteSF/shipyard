<template>
  <section>
    <h1 class="mb-7">Colors</h1>

    <div class="ml-3 mb-5">
      <h2>Primary Colors</h2>
      <div class="row">
        <div class="col-md-3 mb-3">
          <div class="card">
            <div v-for="(color, index) in scale" v-bind:key="index"
              v-bind:class="`bg-primary-${color} p-3`">
              <h5 v-if="index === 0" class="bold mb-2">primary</h5>
              <div class="flex-space-between">
                <small>bg-primary-{{color}}</small>
                <div class="rounded bg-neutral-25 p-1">
                  <small :class="`primary-${color} bold`">primary-{{color}}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3 mb-3">
          <div class="card">
            <div v-for="(color, index) in scaleB" v-bind:key="index"
              v-bind:class="`bg-secondary-${color} p-3`">
              <h5 v-if="index === 0" class="bold mb-2">secondary</h5>
              <div class="flex-space-between">
                <small>bg-secondary-{{color}}</small>
                <div class="rounded bg-neutral-50 p-1">
                  <small :class="`secondary-${color} bold`">secondary-{{color}}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3 mb-3">
          <div class="card">
            <div v-for="(color, index) in scale" v-bind:key="index"
              v-bind:class="`bg-primary-dark-${color} p-3`">
              <h5 v-if="index === 0" class="bold mb-2">primary-dark</h5>
              <div class="flex-space-between">
                <small>bg-primary-dark-{{color}}</small>
                <div class="rounded bg-neutral-25 p-1">
                  <small :class="`primary-dark-${color} bold`">primary-dark-{{color}}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="ml-3 mb-5">
      <h2>States</h2>
      <div class="row">
        <div class="col-md-3 mb-3">
          <div class="card">
            <div v-for="(color, index) in scaleB" v-bind:key="index"
              v-bind:class="`bg-success-${color} p-3`">
              <h5 v-if="index === 0" class="bold mb-2">success</h5>
              <div class="flex-space-between">
                <small>bg-success-{{color}}</small>
                <div class="rounded bg-neutral-25 p-1">
                  <small :class="`success-${color} bold`">success-{{color}}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3 mb-3">
          <div class="card">
            <div v-for="(color, index) in scale" v-bind:key="index"
              v-bind:class="`bg-info-${color} p-3`">
              <h5 v-if="index === 0" class="bold mb-2">info</h5>
              <div class="flex-space-between">
                <small>bg-info-{{color}}</small>
                <div class="rounded bg-neutral-25 p-1">
                  <small :class="`info-${color} bold`">info-{{color}}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3 mb-3">
          <div class="card">
            <div v-for="(color, index) in scale" v-bind:key="index"
              v-bind:class="`bg-warning-${color} p-3`">
              <h5 v-if="index === 0" class="bold mb-2">warning</h5>
              <div class="flex-space-between">
                <small>bg-warning-{{color}}</small>
                <div class="rounded bg-neutral-50 p-1">
                  <small :class="`warning-${color} bold`">warning-{{color}}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3 mb-3">
          <div class="card">
            <div v-for="(color, index) in scale" v-bind:key="index"
              v-bind:class="`bg-error-${color} p-3`">
              <h5 v-if="index === 0" class="bold mb-2">error</h5>
              <div class="flex-space-between">
                <small>bg-error-{{color}}</small>
                <div class="rounded bg-neutral-25 p-1">
                  <small :class="`error-${color} bold`">error-{{color}}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="ml-3 mb-5">
      <h2>Neutral Colors</h2>
      <div class="row">
        <div class="col-md-3 mb-3">
          <div class="card">
            <div v-for="(color, index) in scaleNeutral" v-bind:key="index"
              v-bind:class="`bg-neutral-${color} p-3`">
              <h5 v-if="index === 0" class="bold mb-2">neutral</h5>
              <div class="flex-space-between">
                <small>bg-neutral-{{color}}</small>
                <div :class="`rounded bg-neutral-${color == 25 ? '50' : '25'} p-1`">
                  <small :class="`neutral-${color}`">
                    <b>neutral-{{color}}</b>
                    <i v-if="index === 6" class="fa-solid fa-cat"></i>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Colors',
  data() {
    return {
      scale: [100, 80, 60, 15],
      scaleB: [100, 80, 60],
      scaleNeutral: [100, 70, 50, 25, 10, '05', '00']
    }
  }
}
</script>
