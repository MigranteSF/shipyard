<template>
  <section>
    <h1 class="mb-7">Buttons <small>vanilla</small></h1>

    <div class="ml-3">
      <div class="mb-5">
        <h2 class="mb-2">Primary</h2>
        <div class="flex border p-3 rounded mb-2">
          <div class="mr-5">
            <h5 class="bold mb-1">Regular</h5>
            <div class="flex">
              <button class="button button-primary mr-3">Shipyard<i class="fa-solid fa-cat"></i></button>
              <button class="button button-primary" disabled>Shipyard</button>
            </div>
          </div>
          <div class="mr-5">
            <h5 class="bold mb-1">Large</h5>
            <div class="flex">
              <button class="button button-primary button-lg mr-3">Shipyard</button>
              <button class="button button-primary button-lg" disabled>Shipyard</button>
            </div>
          </div>
          <div class="mr-5">
            <h5 class="bold mb-1">Small</h5>
            <div class="flex">
              <button class="button button-primary button-sm mr-3">Shipyard</button>
              <button class="button button-primary button-sm" disabled>Shipyard</button>
            </div>
          </div>
        </div>
        <div class="rounded bg-neutral-10 p-4">
          <code class="d-block primary-dark-100">
            &lt;<span class="info-80">button </span>
            <span class="error-100">class</span>="button button-primary"&gt;Shipyard&lt;<span class="info-80">/button</span>&gt;
          </code>
          <code class="d-block primary-dark-100">
            &lt;<span class="info-80">button </span>
            <span class="error-100">class</span>="button button-primary"<span class="error-100">
            disabled</span>&gt;Shipyard&lt;<span class="info-80">/button</span>&gt;
          </code>
          <code class="d-block primary-dark-100">
            &lt;<span class="info-80">button </span>
            <span class="error-100">class</span>="button button-primary button-lg"&gt;Shipyard&lt;<span class="info-80">/button</span>&gt;
          </code>
          <code class="d-block primary-dark-100">
            &lt;<span class="info-80">button </span>
            <span class="error-100">class</span>="button button-primary button-lg"<span class="error-100">
            disabled</span>&gt;Shipyard&lt;<span class="info-80">/button</span>&gt;
          </code>
          <code class="d-block primary-dark-100">
            &lt;<span class="info-80">button </span>
            <span class="error-100">class</span>="button button-primary button-sm"&gt;Shipyard&lt;<span class="info-80">/button</span>&gt;
          </code>
          <code class="d-block primary-dark-100">
            &lt;<span class="info-80">button </span>
            <span class="error-100">class</span>="button button-primary button-sm"<span class="error-100">
            disabled</span>&gt;Shipyard&lt;<span class="info-80">/button</span>&gt;
          </code>
        </div>
      </div>

      <div class="mb-5">
        <h2 class="mb-2">Secondary</h2>
        <div class="flex border p-3 rounded mb-2">
          <div class="mr-5">
            <h5 class="bold mb-1">Regular</h5>
            <div class="flex">
              <button class="button button-secondary mr-3">Shipyard</button>
              <button class="button button-secondary" disabled>Shipyard</button>
            </div>
          </div>
          <div class="mr-5">
            <h5 class="bold mb-1">Large</h5>
            <div class="flex">
              <button class="button button-secondary button-lg mr-3">Shipyard</button>
              <button class="button button-secondary button-lg " disabled>Shipyard</button>
            </div>
          </div>
          <div class="mr-5">
            <h5 class="bold mb-1">Small</h5>
            <div class="flex">
              <button class="button button-secondary button-sm mr-3">Shipyard</button>
              <button class="button button-secondary button-sm" disabled>Shipyard</button>
            </div>
          </div>
        </div>
        <div class="rounded bg-neutral-10 p-4">
          <code class="d-block primary-dark-100">
            &lt;<span class="info-80">button </span>
            <span class="error-100">class</span>="button button-secondary"&gt;Shipyard&lt;<span class="info-80">/button</span>&gt;
          </code>
          <code class="d-block primary-dark-100">
            &lt;<span class="info-80">button </span>
            <span class="error-100">class</span>="button button-secondary"<span class="error-100">
            disabled</span>&gt;Shipyard&lt;<span class="info-80">/button</span>&gt;
          </code>
          <code class="d-block primary-dark-100">
            &lt;<span class="info-80">button </span>
            <span class="error-100">class</span>="button button-secondary button-lg"&gt;Shipyard&lt;<span class="info-80">/button</span>&gt;
          </code>
          <code class="d-block primary-dark-100">
            &lt;<span class="info-80">button </span>
            <span class="error-100">class</span>="button button-secondary button-lg"<span class="error-100">
            disabled</span>&gt;Shipyard&lt;<span class="info-80">/button</span>&gt;
          </code>
          <code class="d-block primary-dark-100">
            &lt;<span class="info-80">button </span>
            <span class="error-100">class</span>="button button-secondary button-sm"&gt;Shipyard&lt;<span class="info-80">/button</span>&gt;
          </code>
          <code class="d-block primary-dark-100">
            &lt;<span class="info-80">button </span>
            <span class="error-100">class</span>="button button-secondary button-sm"<span class="error-100">
            disabled</span>&gt;Shipyard&lt;<span class="info-80">/button</span>&gt;
          </code>
        </div>
      </div>

      <div class="mb-5">
        <h2 class="mb-2">Negative</h2>
        <div class="flex border p-3 rounded mb-2">
          <div class="mr-5">
            <h5 class="bold mb-1">Regular</h5>
            <div class="flex mb-2">
              <button class="button button-negative mr-3">Shipyard</button>
              <button class="button button-negative" disabled>Shipyard</button>
            </div>
          </div>
          <div class="mr-5">
            <h5 class="bold mb-1">Large</h5>
            <div class="flex">
              <button class="button button-negative button-lg mr-3">Shipyard</button>
              <button class="button button-negative button-lg " disabled>Shipyard</button>
            </div>
          </div>
          <div class="mr-5">
            <h5 class="bold mb-1">Small</h5>
            <div class="flex">
              <button class="button button-negative button-sm mr-3">Shipyard</button>
              <button class="button button-negative button-sm" disabled>Shipyard</button>
            </div>
          </div>
        </div>
        <div class="rounded bg-neutral-10 p-4">
          <code class="d-block primary-dark-100">
            &lt;<span class="info-80">button </span>
            <span class="error-100">class</span>="button button-negative"&gt;Shipyard&lt;<span class="info-80">/button</span>&gt;
          </code>
          <code class="d-block primary-dark-100">
            &lt;<span class="info-80">button </span>
            <span class="error-100">class</span>="button button-negative"<span class="error-100">
            disabled</span>&gt;Shipyard&lt;<span class="info-80">/button</span>&gt;
          </code>
          <code class="d-block primary-dark-100">
            &lt;<span class="info-80">button </span>
            <span class="error-100">class</span>="button button-negative button-lg"&gt;Shipyard&lt;<span class="info-80">/button</span>&gt;
          </code>
          <code class="d-block primary-dark-100">
            &lt;<span class="info-80">button </span>
            <span class="error-100">class</span>="button button-negative button-lg"<span class="error-100">
            disabled</span>&gt;Shipyard&lt;<span class="info-80">/button</span>&gt;
          </code>
          <code class="d-block primary-dark-100">
            &lt;<span class="info-80">button </span>
            <span class="error-100">class</span>="button button-negative button-sm"&gt;Shipyard&lt;<span class="info-80">/button</span>&gt;
          </code>
          <code class="d-block primary-dark-100">
            &lt;<span class="info-80">button </span>
            <span class="error-100">class</span>="button button-negative button-sm"<span class="error-100">
            disabled</span>&gt;Shipyard&lt;<span class="info-80">/button</span>&gt;
          </code>
        </div>
      </div>

      <div class="mb-5">
        <h2 class="mb-2">Dashed</h2>
        <div class="flex border p-3 rounded mb-2">
          <div class="mr-5">
            <h5 class="bold mb-1">Regular</h5>
            <div class="flex">
              <button class="button button-dashed mr-3">
                <span><i class="fa-solid fa-cat"></i>Shipyard</span>
              </button>
              <button class="button button-dashed" disabled>
                <span><i class="fa-solid fa-cat"></i>Shipyard</span>
              </button>
            </div>
          </div>
          <div class="mr-5">
            <h5 class="bold mb-1">Small</h5>
            <div class="flex">
              <button class="button button-dashed button-sm mr-3">
                <span><i class="fa-solid fa-cat"></i>Shipyard</span>
              </button>
              <button class="button button-dashed button-sm" disabled>
                <span><i class="fa-solid fa-cat"></i>Shipyard</span>
              </button>
            </div>
          </div>
        </div>
        <div class="rounded bg-neutral-10 p-4">
          <div>
            <code class="d-block primary-dark-100">
              &lt;<span class="info-80">button </span><span class="error-100">class</span>="button button-dashed"&gt;
            </code>
            <code class="d-block primary-dark-100">
              &nbsp;&lt;<span class="info-80">span</span>&gt;&lt;<span class="info-80">i</span>
              <span class="error-100"> class</span>="fa-solid fa-cat"&gt;&lt;<span class="info-80">/i</span>&gt;Shipyard&lt;<span class="info-80">/span</span>&gt;
            </code>
            <code class="d-block primary-dark-100">
              &lt;<span class="info-80">/button</span>&gt;
            </code>
          </div>
          <div>
            <code class="d-block primary-dark-100">
              &lt;<span class="info-80">button </span><span class="error-100">class</span>="button button-dashed"&gt;
            </code>
            <code class="d-block primary-dark-100">
              &nbsp;&lt;<span class="info-80">span</span>&gt;&lt;<span class="info-80">i</span>
              <span class="error-100"> class</span>="fa-solid fa-cat"<span class="error-100">
              disabled</span>&gt;&lt;<span class="info-80">/i</span>&gt;Shipyard&lt;<span class="info-80">/span</span>&gt;
            </code>
            <code class="d-block primary-dark-100">
              &lt;<span class="info-80">/button</span>&gt;
            </code>
          </div>
          <div>
            <code class="d-block primary-dark-100">
              &lt;<span class="info-80">button </span><span class="error-100">class</span>="button button-dashed button-sm"&gt;
            </code>
            <code class="d-block primary-dark-100">
              &nbsp;&lt;<span class="info-80">span</span>&gt;&lt;<span class="info-80">i</span>
              <span class="error-100"> class</span>="fa-solid fa-cat"&gt;&lt;<span class="info-80">/i</span>&gt;Shipyard&lt;<span class="info-80">/span</span>&gt;
            </code>
            <code class="d-block primary-dark-100">
              &lt;<span class="info-80">/button</span>&gt;
            </code>
          </div>
          <div>
            <code class="d-block primary-dark-100">
              &lt;<span class="info-80">button </span><span class="error-100">class</span>="button button-dashed button-sm"&gt;
            </code>
            <code class="d-block primary-dark-100">
              &nbsp;&lt;<span class="info-80">span</span>&gt;&lt;<span class="info-80">i</span>
              <span class="error-100"> class</span>="fa-solid fa-cat"<span class="error-100">
              disabled</span>&gt;&lt;<span class="info-80">/i</span>&gt;Shipyard&lt;<span class="info-80">/span</span>&gt;
            </code>
            <code class="d-block primary-dark-100">
              &lt;<span class="info-80">/button</span>&gt;
            </code>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Buttons"
}
</script>