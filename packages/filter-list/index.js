import filterList from './main.vue'

filterList.install = Vue => {
  Vue.component(filterList.name, filterList)
}

export default filterList