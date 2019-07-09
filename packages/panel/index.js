import KudoPanel from './main.vue'

KudoPanel.install = Vue => {
  Vue.component(KudoPanel.name, KudoPanel)
}

export default KudoPanel