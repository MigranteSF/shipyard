<template>
  <section>
    <h1 class="mb-7">Alert</h1>

    <div class="ml-3">
      <div class="mb-3">
        <h2 class="mb-2">Warning</h2>
        <div class="mb-2 border p-3 rounded">

          <div class="message-banner warning">
            <div class="limit-width">
              <i class="fa-solid fa-triangle-exclamation mr-3"></i>
              <p class="message-banner-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur officiis odit culpa impedit!</small>
              </p>
              <div class="flex message-banner-actions">
                <button class="button button-secondary button-sm">Shipyard</button>
                <button class="button button-primary button-sm ml-2">Shipyard</button>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div class="mb-3">
        <h2 class="mb-2">Info</h2>
        <div class="mb-2 border p-3 rounded">

          <div class="message-banner info">
            <div class="limit-width">
              <i class="fa-solid fa-circle-info mr-3"></i>
              <p class="message-banner-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur officiis odit culpa impedit!</small>
              </p>
              <div class="flex message-banner-actions">
                <button class="button button-secondary button-sm">Shipyard</button>
                <button class="button button-primary button-sm ml-2">Shipyard</button>
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
  name: 'Alert'
}
</script>