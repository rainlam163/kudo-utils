# kudo-utils

## 介绍

kudo-utils是一个丰富的vue业务组件库，非常在业务系统开发的时候使用，它包含了许多丰富的业务组件，总有一个组件适合你！

## 安装

```
npm install kudo-utils --save
```

## 使用

### 全局引入

在入口文件main.js引入kudo-utils库，同时引入样式文件

```
import KudoUtils from 'kudo-utils'
import 'kudo-utils/styles/index.css'

Vue.use(KudoUtils)
```

### 组件使用

在任意vue组件中直接使用组件就行啦！如：

``` html
<template>
  <kudo-filter-list :data="data" v-model="value"></kudo-filter-list>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        value: '01',
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
          }
        ]
      }
    }
  }
</script>
```