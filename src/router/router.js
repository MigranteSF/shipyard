import Vue from "vue"
import VueRouter from 'vue-router'

import Home from "../views/Home.vue"
import Color from "../views/Color.vue"
import Typography from "../views/Typography.vue"
import ElevationShadow from "../views/ElevationShadow.vue"
import Button from "../views/Button.vue"
import Badge from "../views/Badge.vue"
import Breadcrumb from "../views/Breadcrumb.vue"
import Tab from "../views/Tab.vue"
import SCheckSwitch from "../views/SCheckSwitch.vue"
import Chip from "../views/Chip.vue"
import ChecksRadios from "../views/ChecksRadios.vue"
import Select from "../views/Select.vue"
import Need from "../views/Need.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/content/color',
    name: 'color',
    component: Color
  },
  {
    path: '/content/typography',
    name: 'typography',
    component: Typography
  },
  {
    path: '/content/elevation&shadow',
    name: 'elevation&shadow',
    component: ElevationShadow
  },
  {
    path: '/components/button',
    name: 'button',
    component: Button
  },
  {
    path: '/components/badge',
    name: 'badge',
    component: Badge
  },
  {
    path: '/components/breadcrumb',
    name: 'breadcrumb',
    component: Breadcrumb
  },
  {
    path: '/components/tab',
    name: 'tab',
    component: Tab
  },
  {
    path: '/components/switch',
    name: 'switch',
    component: SCheckSwitch
  },
  {
    path: '/components/chip',
    name: 'chip',
    component: Chip
  },
  {
    path: '/components/checks&radios',
    name: 'checks&radios',
    component: ChecksRadios
  },
  {
    path: '/components/select',
    name: 'select',
    component: Select
  },
  {
    path: '/need',
    name: 'need',
    component: Need
  },
  // 404
  // {
  //   path: '*',
  //   component: Select
  // }
]

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})