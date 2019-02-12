<template lang="html">

</template>

<script>
export default {
  name: 'SpellDirectory',
  data () {
    spell_directory: [
      {
        "name": "Wingardium Leviosa",
        "desc": "make an object float",
        "effect": "animation--up animation--floating",
        "medium": "",
        "special-spell":{}
      },
      {
        "name": "lumos",
        "desc": "turn the light",
        "effect": "",
        "medium": "lumos",
        "special-spell":{}
      },
      {
        "name": "Riddikulus",
        "desc": "Change object into another object you want",
        "effect": "",
        "medium": "",
        "special-spell":{
          "title": "Hmmm...",
          "desc": "in order to work, you have to choose a replacement object",
          "objects": ["cat--love", "cat--cheer", "celebration", "magic", "crystal-ball", "alohomora", "lumos", "oculus-reparo"],
          "type": "success"
        }
      },
      {
        "name": "Accio",
        "desc": "Call everything to coming up",
        "effect": "animation--comeIn",
        "medium": "",
        "special-spell":{
          "title": "Hmmm...",
          "desc": "in order to work, you have to choose a object to call",
          "objects": ["crookshanks", "dolphin", "elephant", "fish", "lion"],
          "type": "success"
        }
      },
      {
        "name": "Avada Kadavra",
        "desc": "Instant Kill",
        "effect": "animation--up animation--fadeOut",
        "medium": "crossbones",
        "special-spell":{
          "title": "Really?",
          "desc": "You will not be forgiven for using this spell",
          "objects": [],
          "type": "danger"
        }
      }
    ]
  }
}
</script>

<style lang="css" scoped>
</style>
