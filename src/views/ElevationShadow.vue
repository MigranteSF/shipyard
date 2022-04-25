<template>
  <section>
    <h1 class="mb-7">Elevation and Shadow</h1>

    <div class="border rounded p-3 m-1 mb-3">
      <div class="row sd-example-shadow col-lg-10 col-md-12">
        <div class="col-sm-6 col-md-4 col-lg-2">
          <span class="card border-0 shadow-light-100">
            <p>Shadow 100%</p>
          </span>
        </div>
        <div class="col-sm-6 col-md-4 col-lg-2">
          <span class="card border-0 shadow-light-80">
            <p>Shadow 80%</p>
          </span>
        </div>
        <div class="col-sm-6 col-md-4 col-lg-2">
          <span class="card border-0 shadow-light-60">
            <p>Shadow 60%</p>
          </span>
        </div>
        <div class="col-sm-6 col-md-4 col-lg-2">
          <span class="card border-0 shadow-light-40">
            <p>Shadow 40%</p>
          </span>
        </div>
        <div class="col-sm-6 col-md-4 col-lg-2">
          <span class="card border-0 shadow-light-20">
            <p>Shadow 20%</p>
          </span>
        </div>
      </div>
    </div>
    <div class="code">
      <code>
        &lt;<em>span</em> <i>class</i>="shadow-light-100"&gt;Shadow 100%&lt;<em>/span</em>&gt;<br>
        &lt;<em>span</em> <i>class</i>="shadow-light-80"&gt;Shadow 80%&lt;<em>/span</em>&gt;<br>
        &lt;<em>span</em> <i>class</i>="shadow-light-60"&gt;Shadow 60%&lt;<em>/span</em>&gt;<br>
        &lt;<em>span</em> <i>class</i>="shadow-light-40"&gt;Shadow 40%&lt;<em>/span</em>&gt;<br>
        &lt;<em>span</em> <i>class</i>="shadow-light-20"&gt;Shadow 20%&lt;<em>/span</em>&gt;
      </code>
      <i class="fa-solid fa-cat absolute flip-2-hor-top-1"></i>
    </div>
  </section>
</template>
<script>
export default {
  name: 'ElevationShadow'
}
</script>
<style lang="scss" scoped>
.sd-example-shadow span {
  // width: 150px;
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