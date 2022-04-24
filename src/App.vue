<template>
  <div id="app">
    <nav class="header bg-primary-100 flex">
      <div class="flex-center">
        <a href="/"><img src="./assets/svg/migrante.svg" alt="Migrante"></a>
        <div class="vertical-line mx-3"></div>
        <b class="primary-15">SHIPYARD</b>
      </div>
    </nav>
    <div class="row p-0 m-0">
      <aside class="border-bottom-0 col-md-3 col-xl-2 col-12">
        <nav class="nav-links">
          <ul>
            <li class="mb-1 w-max">
              <router-link to="/color" class="neutral-70"><h6 class="regular">Color</h6></router-link>
            </li>
            <li class="mb-1 w-max">
              <router-link to="/typography" class="neutral-70"><h6 class="regular">Typography</h6></router-link>
            </li>
            <li class="mb-1 w-max">
              <router-link to="/elevation&shadow" class="neutral-70"><h6 class="regular">Elevation and Shadow</h6></router-link>
            </li>
            <li class="mb-1 w-max">
              <router-link to="/button" class="neutral-70"><h6 class="regular">Button</h6></router-link>
            </li>
            <li class="mb-1 w-max">
              <router-link to="/badge" class="neutral-70"><h6 class="regular">Badge</h6></router-link>
            </li>
            <li class="mb-1 w-max">
              <router-link to="/breadcrumb" class="neutral-70"><h6 class="regular">Breadcrumb</h6></router-link>
            </li>
            <li class="mb-1 w-max">
              <router-link to="/tab" class="neutral-70"><h6 class="regular">Tab</h6></router-link>
            </li>
            <li class="mb-1 w-max">
              <router-link to="/switch" class="neutral-70"><h6 class="regular">Switch</h6></router-link>
            </li>
            <li class="mb-1 w-max">
              <router-link to="/chip" class="neutral-70"><h6 class="regular">Chip</h6></router-link>
            </li>
            <li class="mb-1 w-max">
              <router-link to="/checks&radios" class="neutral-70"><h6 class="regular">Checks & Radios</h6></router-link>
            </li>
            <li class="mb-1 w-max">
              <router-link to="/select" class="neutral-70"><h6 class="regular">Select</h6></router-link>
            </li>
            <li class="mb-1 w-max">
              <router-link to="/need" class="neutral-70"><h6 class="regular">Need ...</h6></router-link>
            </li>
          </ul>
        </nav>
      </aside>
      <main class="col-md-9 col-xl-10 col-12 pt-4 pb-3">
        <div class="shadow-light-100 p-3">
          <router-view></router-view>
        </div>
      </main>
    </div>
  </div>
</template>
<script>
export default {
  name: 'App',
}
</script>
<style lang="scss">
.header {
  padding: 15px 28px;
}

.nav-links {
  position: -webkit-sticky;
  position: sticky;
  margin-top: 10px;
  top: 5rem;
  display: block !important;
  overflow-y: auto;
}

.nav-links a {
  & h6 {
    padding: 5px;
    width: max-content;
    border-radius: 5px;
    &:hover {
      background-color: #C1C1C1;
    }
  }
  &:hover {
    text-decoration: unset;
    color: #050505;
  }
}

.router-link-exact-active h6 {
  font-weight: bold !important;
}
</style>
