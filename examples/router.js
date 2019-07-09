import VueRouter from "vue-router";

const router = new VueRouter({
  routes: [
    {
      path: '/filter-list',
      component: resolve => require(['./components/filter-list.vue'], resolve)
    },
    {
      path: '/panel',
      component: resolve => require(['./components/panel.vue'], resolve)
    }
  ]
})

export default router