<template>
  <div class="kudo-filter-list">
    <input type="text" @input="handleInputChange" class="input" :placeholder="placeholder">
    <ul class="list">
      <li
        v-for="(item,i) in filterData"
        :key="item[bindProps.value]"
        :class="{'item':true,'selected-item':value===item[bindProps.value], 'divider':divider}"
        @click="handleSelectChange(item)">
        <span>{{item[bindProps.label]}}</span>
        <div class="action">
          <button :class="['button',action.type]" v-for="(action,j) in actions" :key="`action-${i}-${j}`" @click.stop="action.onClick(item)">{{action.label}}</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'KudoFilterList',
  data() {
    return {
      filter: '',
      filterData: []
    }
  },
  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    },
    bindProps: {
      type: Object,
      default() {
        return {
          value: 'value',
          label: 'label'
        }
      }
    },
    labelInValue: {
      type: Boolean,
      default: false
    },
    value: {
      type: [Number, String],
      default: ''
    },
    actions: {
      type: Array,
      default() {
        return []
      }
    },
    placeholder: {
      type: String,
      default: '请输入关键字……'
    },
    divider: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleInputChange(e) {
      this.filterData = this.data.filter(item => item[this.bindProps.value].toLowerCase().indexOf(e.target.value.toLowerCase()) > -1 || item[this.bindProps.label].toLowerCase().indexOf(e.target.value.toLowerCase()) > -1)
      if (this.filterData.length) {
        this.$emit('input', this.filterData[0][this.bindProps.value])
      }
    },
    handleSelectChange(item) {
      this.$emit('input', item[this.bindProps.value])
      this.$emit('on-selection-change', this.labelInValue ? item : item[this.bindProps.value])
    }
  },
  mounted() {
    this.filterData = JSON.parse(JSON.stringify(this.data));
  },
  watch: {
    data: {
      hadnler(val) {
        this.filterData = JSON.parse(JSON.stringify(val))
      },
      deep: true
    }
  }
}
</script>