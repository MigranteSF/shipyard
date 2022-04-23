import Vue from "vue"
import VueRouter from 'vue-router'
import Colors from "./views/Colors.vue"
import Typography from "./views/Typography.vue"
import ElevationsShadows from "./views/ElevationsShadows.vue"
import Buttons from "./views/Buttons.vue"
import Badges from "./views/Badges.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'color',
    component: Colors
  },
  {
    path: '/typography',
    name: 'typography',
    component: Typography
  },
  {
    path: '/elevations&shadows',
    name: 'elevations&shadows',
    component: ElevationsShadows
  },
  {
    path: '/buttons',
    name: 'buttons',
    component: Buttons
  },
  {
    path: '/badges',
    name: 'badges',
    component: Badges
  }
]

export default new VueRouter({
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})