<template>
  <div id="app">
    <div class="main">
      <div class="wrapper">
        <header>
          <h1>Spell Chant</h1>
          <p>Test your spell skill, how expert you are.</p>
        </header>
        <Menu></Menu>
        <router-view></router-view>
        <footer>@copyright addincw 2018</footer>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'
import Home from './components/Home.vue'
export default {
  name: 'app',
  components: {
    Menu,
    Home
  },
}
</script>

<style lang="css" scoped>
</style>
