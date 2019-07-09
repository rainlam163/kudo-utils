<template>
  <div>
    <kudo-filter-list
      :data="data"
      v-model="selection.value"
      label-in-value
      divider
      :actions="actions"
      @on-selection-change="handleSelectionChange"></kudo-filter-list>
    <span>选中车型：{{selection.label}}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selection: {
        label: '',
        value: ''
      },
      data: [
        {
          value: '01',
          label: '领克01'
        },
        {
          value: '02',
          label: '领克02'
        },
        {
          value: '03',
          label: '领克03'
        },
        {
          value: '05',
          label: '领克05'
        }
      ],
      actions: [
        {
          label: '删除',
          type: 'error',
          onClick: (item) => {
            alert(item.label)
          }
        },
        {
          label: '修改',
          type: 'warning',
          onClick: (item) => {
            alert(item.label)
          }
        },
        {
          label: '查看',
          type: 'info',
          onClick: (item) => {
            alert(item.label)
          }
        },
        {
          label: '购买',
          type: 'text',
          onClick: (item) => {
            alert(item.label)
          }
        }
      ]
    }
  },
  methods: {
    handleSelectionChange({label}) {
      this.selection.label = label;
    }
  }
}
</script>
