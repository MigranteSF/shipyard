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
            <li class="mb-1">
              <span block v-b-toggle.collapse-content class="link-header"><h6 class="neutral-50">Content</h6></span>
              <b-collapse id="collapse-content" :visible="isInPath('content', true)" accordion="menu">
                <ul class="ml-2">
                  <li class="my-2 w-max">
                    <router-link :to="{ name: 'typography' }" class="neutral-70"><small>Typography</small></router-link>
                  </li>
                  <li class="my-2 w-max">
                    <router-link :to="{ name: 'color' }" class="neutral-70"><small>Color</small></router-link>
                  </li>
                  <li class="my-2 w-max">
                    <router-link :to="{ name: 'elevation&shadow' }" class="neutral-70"><small>Elevation and Shadow</small></router-link>
                  </li>
                </ul>
              </b-collapse>
            </li>
            <li class="mb-1">
              <span block v-b-toggle.collapse-components class="link-header"><h6 class="neutral-50">Components</h6></span>
              <b-collapse id="collapse-components" :visible="isInPath('components')" accordion="menu">
                <ul class="ml-2">
                  <li class="my-2 w-max">
                    <router-link :to="{ name: 'button' }" class="neutral-70"><small>Button</small></router-link>
                  </li>
                  <li class="my-2 w-max">
                    <router-link :to="{ name: 'badge' }" class="neutral-70"><small>Badge</small></router-link>
                  </li>
                  <li class="my-2 w-max">
                    <router-link :to="{ name: 'breadcrumb' }" class="neutral-70"><small>Breadcrumb</small></router-link>
                  </li>
                  <li class="my-2 w-max">
                    <router-link :to="{ name: 'tab' }" class="neutral-70"><small>Tab</small></router-link>
                  </li>
                  <li class="my-2 w-max">
                    <router-link :to="{ name: 'switch' }" class="neutral-70"><small>Switch</small></router-link>
                  </li>
                  <li class="my-2 w-max">
                    <router-link :to="{ name: 'chip' }" class="neutral-70"><small>Chip</small></router-link>
                  </li>
                  <li class="my-2 w-max">
                    <router-link :to="{ name: 'checks&radios' }" class="neutral-70"><small>Checks & Radios</small></router-link>
                  </li>
                  <li class="my-2 w-max">
                    <router-link :to="{ name: 'select' }" class="neutral-70"><small>Select</small></router-link>
                  </li>
                </ul>
              </b-collapse>
            </li>
            <li class="mb-1 w-max">
              <router-link to="/need" class="neutral-70 link-header"><h6 class="regular">Need ...</h6></router-link>
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
  methods: {
    isInPath(route, main = false) {
      if (main)
        if (window.location.pathname === '/')
          return true

      return window.location.pathname.startsWith(`${process.env.BASE_URL}${route}`)
    }
  }
}
</script>
<style lang="scss">
.header {
  padding: 15px 28px;
}

.link-header {
  font-size: 1rem;
  font-weight: bold;

  & h6 {
    padding: 5px;
    width: max-content;
    border-radius: 5px;
    font-size: 0.85rem;
    &:hover {
      color: #050505;
      background-color: #C1C1C1;
    }
  }

  &.not-collapsed h6 {
    color: #484848;
  }
}

.nav-links {
  position: -webkit-sticky;
  position: sticky;
  margin-top: 10px;
  top: 5rem;
  display: block !important;
  overflow-y: auto;
  height: calc(100vh - 5rem);
}

.nav-links a {
  & small {
    padding: 5px;
    width: max-content;
    border-radius: 5px;
    font-size: 0.85rem;
    &:hover {
      background-color: #C1C1C1;
    }
  }
  &:hover {
    text-decoration: unset;
    color: #050505;
  }
}

.router-link-exact-active {
  & small, h6 {
    font-weight: bold !important;
  }
}
</style>
