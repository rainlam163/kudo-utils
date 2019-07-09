<template>
  <div id="app">
    <ul>
      <li>
        <router-link to="/filter-list">filter-list</router-link>
      </li>
      <li>
        <router-link to="/panel">panel</router-link>
      </li>
    </ul>
    <br>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>
