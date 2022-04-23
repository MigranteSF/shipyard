<template>
  <section>
    <h1 class="mb-7">Elevations and Shadows</h1>

    <div class="sd-example-shadow flex border p-3 rounded mb-3">
      <span class="card border-0 shadow-light-100 mx-3">
        <p>Shadow 100%</p>
      </span>
      <span class="card border-0 shadow-light-80 mx-3">
        <p>Shadow 80%</p>
      </span>
      <span class="card border-0 shadow-light-60 mx-3">
        <p>Shadow 60%</p>
      </span>
      <span class="card border-0 shadow-light-40 mx-3">
        <p>Shadow 40%</p>
      </span>
      <span class="card border-0 shadow-light-20 mx-3">
        <p>Shadow 20%</p>
      </span>
    </div>

    <div class="rounded bg-neutral-10 p-4 relative">
      <code class="d-block primary-dark-100">
        &lt;<span class="info-80">span</span> <span class="error-100">class</span>="shadow-light-100"&gt;Shadow 100%&lt;<span class="info-80">/span</span>&gt;
      </code>
      <code class="d-block primary-dark-100">
        &lt;<span class="info-80">span</span> <span class="error-100">class</span>="shadow-light-80"&gt;Shadow 80%&lt;<span class="info-80">/span</span>&gt;
      </code>
      <code class="d-block primary-dark-100">
        &lt;<span class="info-80">span</span> <span class="error-100">class</span>="shadow-light-60"&gt;Shadow 60%&lt;<span class="info-80">/span</span>&gt;
      </code>
      <code class="d-block primary-dark-100">
        &lt;<span class="info-80">span</span> <span class="error-100">class</span>="shadow-light-40"&gt;Shadow 40%&lt;<span class="info-80">/span</span>&gt;
      </code>
      <code class="d-block primary-dark-100">
        &lt;<span class="info-80">span</span> <span class="error-100">class</span>="shadow-light-20"&gt;Shadow 20%&lt;<span class="info-80">/span</span>&gt;
      </code>
      <i class="fa-solid fa-cat absolute flip-2-hor-top-1"></i>
    </div>
  </section>
</template>
<script>
export default {
  name: 'ElevationsShadows'
}
</script>
<style lang="scss" scoped>
.sd-example-shadow span {
  width: 150px;
  height: 150px;
  padding: 13px;

  & p {
    margin-bottom: 0;
    position: absolute;
    bottom: 13px;
  }
}

.flip-2-hor-top-1 {
	-webkit-animation: flip-2-hor-top-1 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
  animation: flip-2-hor-top-1 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
}

@-webkit-keyframes flip-2-hor-top-1 {
  0% {
    -webkit-transform: translateY(0) rotateX(0);
            transform: translateY(0) rotateX(0);
    -webkit-transform-origin: 50% 0%;
            transform-origin: 50% 0%;
  }
  100% {
    -webkit-transform: translateY(-100%) rotateX(-180deg);
            transform: translateY(-100%) rotateX(-180deg);
    -webkit-transform-origin: 50% 100%;
            transform-origin: 50% 100%;
  }
}
@keyframes flip-2-hor-top-1 {
  0% {
    -webkit-transform: translateY(0) rotateX(0);
            transform: translateY(0) rotateX(0);
    -webkit-transform-origin: 50% 0%;
            transform-origin: 50% 0%;
  }
  100% {
    -webkit-transform: translateY(-100%) rotateX(-180deg);
            transform: translateY(-100%) rotateX(-180deg);
    -webkit-transform-origin: 50% 100%;
            transform-origin: 50% 100%;
  }
}
</style>