import Vue from "vue"
import VueRouter from 'vue-router'
import Home from "./views/Home.vue"
import Color from "./views/Color.vue"
import Typography from "./views/Typography.vue"
import ElevationShadow from "./views/ElevationShadow.vue"
import Button from "./views/Button.vue"
import Badge from "./views/Badge.vue"
import Breadcrumb from "./views/Breadcrumb.vue"
import Tab from "./views/Tab.vue"
import SCheckSwitch from "./views/SCheckSwitch.vue"
import Chip from "./views/Chip.vue"
import ChecksRadios from "./views/ChecksRadios.vue"
import Need from "./views/Need.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/color',
    name: 'color',
    component: Color
  },
  {
    path: '/typography',
    name: 'typography',
    component: Typography
  },
  {
    path: '/elevation&shadow',
    name: 'elevation&shadow',
    component: ElevationShadow
  },
  {
    path: '/button',
    name: 'button',
    component: Button
  },
  {
    path: '/badge',
    name: 'badge',
    component: Badge
  },
  {
    path: '/breadcrumb',
    name: 'breadcrumb',
    component: Breadcrumb
  },
  {
    path: '/tab',
    name: 'tab',
    component: Tab
  },
  {
    path: '/switch',
    name: 'switch',
    component: SCheckSwitch
  },
  {
    path: '/chip',
    name: 'chip',
    component: Chip
  },
  {
    path: '/checks&radios',
    name: 'checks&radios',
    component: ChecksRadios
  },
  {
    path: '/need',
    name: 'need',
    component: Need
  }
]

export default new VueRouter({
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})