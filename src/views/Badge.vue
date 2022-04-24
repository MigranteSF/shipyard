<template>
  <section>
    <h1 class="mb-7">Badge</h1>

    <div class="ml-3">
      <div class="mb-3">
        <h2 class="mb-2">Standar</h2>
        <div class="mb-2 border p-3 rounded">
          <span class="badge badge-primary mr-2">Primary</span>
          <span class="badge badge-secondary mr-2">Secondary</span>
          <span class="badge badge-success mr-2">Success</span>
          <span class="badge badge-danger mr-2">Danger</span>
          <span class="badge badge-warning mr-2">Warning</span>
          <span class="badge badge-info mr-2">Info</span>
          <span class="badge badge-light mr-2">Light</span>
          <span class="badge badge-dark mr-2">Dark</span>
        </div>
        <div class="code">
          <code>
            &lt;<em>span</em> <i>class</i>="badge badge-primary"&gt;Primary&lt;<em>/span</em>&gt;<br>
            &lt;<em>span</em> <i>class</i>="badge badge-secondary"&gt;Secondary&lt;<em>/span</em>&gt;<br>
            &lt;<em>span</em> <i>class</i>="badge badge-success"&gt;Success&lt;<em>/span</em>&gt;<br>
            &lt;<em>span</em> <i>class</i>="badge badge-danger"&gt;Danger&lt;<em>/span</em>&gt;<br>
            &lt;<em>span</em> <i>class</i>="badge badge-warning"&gt;Warning&lt;<em>/span</em>&gt;<br>
            &lt;<em>span</em> <i>class</i>="badge badge-info"&gt;Info&lt;<em>/span</em>&gt;<br>
            &lt;<em>span</em> <i>class</i>="badge badge-light"&gt;Light&lt;<em>/span</em>&gt;<br>
            &lt;<em>span</em> <i>class</i>="badge badge-dark"&gt;Dark&lt;<em>/span</em>&gt;
          </code>
        </div>
      </div>

      <div class="mb-3">
        <h2 class="mb-2 cat-icon">Pill <i class="fa-solid fa-cat absolute wobble-hor-bottom"></i></h2>
        <p>Just add the <span class="error-100">class</span> <i class="bold">badge-pill</i>.</p>
        <div class="mb-2 border p-3 rounded">
          <span class="badge badge-primary badge-pill mr-2">Primary</span>
          <span class="badge badge-secondary badge-pill mr-2">Secondary</span>
          <span class="badge badge-success badge-pill mr-2">Success</span>
          <span class="badge badge-danger badge-pill mr-2">Danger</span>
          <span class="badge badge-warning badge-pill mr-2">Warning</span>
          <span class="badge badge-info badge-pill mr-2">Info</span>
          <span class="badge badge-light badge-pill mr-2">Light</span>
          <span class="badge badge-dark badge-pill mr-2">Dark</span>
        </div>
        <div class="code">
          <code>
            &lt;<em>span</em> <i>class</i>="badge badge-primary badge-pill"&gt;Primary&lt;<em>/span</em>&gt; ...
          </code>
        </div>
      </div>

      <div class="mb-3">
        <h2 class="mb-2">Small</h2>
        <p>Do you want a tiny badge? Well, here you go: <span class="error-100">class</span> <i class="bold">badge-sm</i>.</p>
        <div class="mb-2 border p-3 rounded">
          <span class="badge badge-primary badge-sm mr-2">Primary</span>
          <span class="badge badge-secondary badge-sm mr-2">Secondary</span>
          <span class="badge badge-success badge-sm mr-2">Success</span>
          <span class="badge badge-danger badge-sm mr-2">Danger</span>
          <span class="badge badge-warning badge-pill badge-sm mr-2">Warning</span>
          <span class="badge badge-info badge-pill badge-sm mr-2">Info</span>
          <span class="badge badge-light badge-pill badge-sm mr-2">Light</span>
          <span class="badge badge-dark badge-pill badge-sm mr-2">Dark</span>
        </div>
        <div class="code">
          <code>
            &lt;<em>span</em> <i>class</i>="badge badge-primary badge-sm"&gt;Primary&lt;<em>/span</em>&gt; ...<br>
            &lt;<em>span</em> <i>class</i>="badge badge-warning badge-pill badge-sm"&gt;Warning&lt;<em>/span</em>&gt; ...
          </code>
        </div>
      </div>

      <div class="mb-3">
        <h2 class="mb-2">Bootstrap Component</h2>
        <p>It also affects <a href="https://bootstrap-vue.org/docs/components/badge#badge" target="_blank">bootstrap components</a>.</p>
        <div class="mb-2 border p-3 rounded">
          <b-badge variant="primary" class="mr-2">Primary</b-badge>
          <b-badge variant="secondary" class="mr-2">Secondary</b-badge>
          <b-badge variant="success" class="mr-2">Success</b-badge>
          <b-badge variant="danger" class="mr-2">Danger</b-badge>
          <b-badge pill variant="warning" class="mr-2">Warning</b-badge>
          <b-badge pill variant="info" class="mr-2">Info</b-badge>
          <b-badge pill variant="light" class="mr-2">Light</b-badge>
          <b-badge pill variant="dark" class="mr-2">Dark</b-badge>
        </div>
        <div class="code">
          <code>
            &lt;<em>b-badge</em> <i>variant</i>="primary"&gt;Primary&lt;<em>/b-badge</em>&gt; ...<br>
            &lt;<em>b-badge</em> <i>pill</i> <i>variant</i>="warning"&gt;Warning&lt;<em>/b-badge</em>&gt; ...
          </code>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Badge"
}
</script>
<style lang="scss" scoped>
.cat-icon {
  position: relative;
  & svg {
    font-size: 12px;
    position: absolute;
    top: 0;
    left: 0;
  }
}

.wobble-hor-bottom {
	-webkit-animation: wobble-hor-bottom 1s both;
  animation: wobble-hor-bottom 1s both;
}

@-webkit-keyframes wobble-hor-bottom {
  0%,
  100% {
    -webkit-transform: translateX(0%);
            transform: translateX(0%);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
  }
  15% {
    -webkit-transform: translateX(-10px) rotate(-6deg);
            transform: translateX(-10px) rotate(-6deg);
  }
  30% {
    -webkit-transform: translateX(10px) rotate(6deg);
            transform: translateX(10px) rotate(6deg);
  }
  45% {
    -webkit-transform: translateX(-10px) rotate(-3.6deg);
            transform: translateX(-10px) rotate(-3.6deg);
  }
  60% {
    -webkit-transform: translateX(6px) rotate(2.4deg);
            transform: translateX(6px) rotate(2.4deg);
  }
  75% {
    -webkit-transform: translateX(-3px) rotate(-1.2deg);
            transform: translateX(-3px) rotate(-1.2deg);
  }
}
@keyframes wobble-hor-bottom {
  0%,
  100% {
    -webkit-transform: translateX(0%);
            transform: translateX(0%);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
  }
  15% {
    -webkit-transform: translateX(-10px) rotate(-6deg);
            transform: translateX(-10px) rotate(-6deg);
  }
  30% {
    -webkit-transform: translateX(10px) rotate(6deg);
            transform: translateX(10px) rotate(6deg);
  }
  45% {
    -webkit-transform: translateX(-10px) rotate(-3.6deg);
            transform: translateX(-10px) rotate(-3.6deg);
  }
  60% {
    -webkit-transform: translateX(6px) rotate(2.4deg);
            transform: translateX(6px) rotate(2.4deg);
  }
  75% {
    -webkit-transform: translateX(-3px) rotate(-1.2deg);
            transform: translateX(-3px) rotate(-1.2deg);
  }
}
</style>