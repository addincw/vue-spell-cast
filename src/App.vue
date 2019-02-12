<template>
  <div id="app">
    <header>
      <h1>Spell Chant</h1>
      <p>Test your spell skill, how expert you are.</p>
    </header>
    <Home></Home>
    <footer>@copyright addincw 2018</footer>
  </div>
</template>

<script>
import Home from './components/Home.vue'
export default {
  name: 'app',
  components: {
    Home
  },
}
</script>

<style lang="css" scoped>
</style>
