<template lang="html">
  <ul class="menu">
    <router-link tag="li" class="menu__item" to="/" exact>Home</router-link>
    <router-link tag="li" class="menu__item" to="/spell-directory" exact> Spell Directory</router-link>
  </ul>
</template>

<script>
export default {
  name: 'Menu'
}
</script>

<style lang="css" scoped>
</style>
