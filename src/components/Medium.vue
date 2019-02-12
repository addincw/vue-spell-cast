<template>
  <img :class="[ 'medium', effect ]" :src="objSrc" alt="">
</template>

<script>
export default {
  name: 'Medium',
  props: {
    emoji: String,
    effect: String
  },
  computed: {
    objSrc: function(){
      return `emojis/`+this.emoji+`.png`
    }
  }
}
</script>

<style lang="css" scoped>
</style>
