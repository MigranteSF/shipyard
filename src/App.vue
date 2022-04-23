<template>
  <div id="app">
    <nav class="header bg-primary-100 flex">
      <div class="flex-center">
        <img src="./assets/svg/migrante.svg" alt="Migrante">
        <div class="vertical-line mx-3"></div>
        <b class="primary-15">SHIPYARD</b>
      </div>
    </nav>
    <div class="row p-0 m-0">
      <aside class="border-bottom-0 col-md-3 col-xl-2 col-12">
        <nav class="nav-links">
          <ul>
            <li class="mb-1 w-max">
              <router-link to="/" class="neutral-70"><h6 class="regular">Colors</h6></router-link>
            </li>
            <li class="mb-1 w-max">
              <router-link to="/typography" class="neutral-70"><h6 class="regular">Typography</h6></router-link>
            </li>
            <li class="mb-1 w-max">
              <router-link to="/elevations&shadows" class="neutral-70"><h6 class="regular">Elevations and Shadows</h6></router-link>
            </li>
            <li class="mb-1 w-max">
              <router-link to="/buttons" class="neutral-70" href="#buttons-page"><h6 class="regular">Buttons</h6></router-link>
            </li>
            <li class="mb-1 w-max">
              <router-link to="/badges" class="neutral-70" href="#buttons-page"><h6 class="regular">Badges</h6></router-link>
            </li>
          </ul>
        </nav>
      </aside>
      <main class="col-md-9 col-xl-10 col-12 pt-4 pb-3">
        <router-view></router-view>
      </main>
    </div>

    <hr>

    <Demo />
  </div>
</template>
<script>
import Demo from "./views/Demo.vue"

export default {
  name: 'App',
  components: { Demo },
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
