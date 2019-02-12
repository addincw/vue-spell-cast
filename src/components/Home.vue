<template>
  <div class="home">
    <section class="main">
      <div class="spell-area">
        <div class="spell-area__medium">
          <Medium :emoji="spell.medium" :effect="spell.effect"></Medium>
        </div>
        <div class="spell-area__alert">
          <div :class="[ 'alert', spell_alert ]">{{ alert_message }}</div>
        </div>
        <div class="spell-area__form">
          <form class="form" @keydown.enter.prevent="">
            <label for="">Type your spell bellow</label>
            <input type="text" class="form__control" v-model="spell.chant">
            <input @click="chant()" type="button" class="form__submit" value="chant!">
          </form>
        </div>
      </div>
    </section>
    <SpecialSpell v-if="is_special_spell" :is_special_spell="is_special_spell" :spell="special_spell" v-on:purify="is_special_spell = false" v-on:picked="successChant($event[0], $event[1]); is_special_spell = false"></SpecialSpell>
  </div>
</template>

<script>
import Medium from './Medium.vue'
import SpecialSpell from './SpecialSpell.vue'
export default {
  name: 'Home',
  components: {
    Medium,
    SpecialSpell
  },
  data () {
    return {
      spell_alert: "",
      alert_message: "Lorem ipsum dolor sit amet.",
      default_alert_class: "show animation--popping",
      is_special_spell: false,
      special_spell: {},
      spell: {
        medium: "box",
        chant: "",
        effect: "",
      },
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
  },
  methods: {
    formattedSpell: function (spell) {
      return spell.toLowerCase().replace(/\s/g, "")
    },
    chant: function(){
      let spell_index
      for( spell_index in this.spell_directory ){
        let spell = this.spell_directory[spell_index]
        if ( this.formattedSpell(spell.name) == this.formattedSpell(this.spell.chant) ) {
          return ( this.isSpecialChant(spell) ) ?
          "" : this.successChant(spell.medium, spell.effect)
        }
      }
      this.failedChant()
      return
    },
    purify: function(){
      setTimeout(()=>{
        this.spell.medium = "box"
        this.spell.effect = ""
        this.spell_alert = ""
      }, 5000)
    },
    failedChant: function(){
      this.spell.medium = "box"
      this.spell.effect = ""
      this.spell_alert = "alert--danger "+this.default_alert_class
      this.alert_message = "Spell correctly mudblood!"
      this.purify()
      return
    },
    successChant: function(medium, effect){
      this.spell.medium = (medium != "") ? medium : "box"
      this.spell.effect = effect
      this.spell_alert = "alert--success "+this.default_alert_class
      this.alert_message = "Whoaa! thats cool.."
      this.purify()
    },
    isSpecialChant: function(spell){
      if (Object.keys(spell["special-spell"]).length !== 0 && spell["special-spell"].constructor === Object) {
        this.is_special_spell = true
        this.special_spell = spell
        return true
      }
      return false
    },
    processSpecialChant: function(){
      console.log("this is method processSpecialChant")
      return
    }
  }
}
</script>

<style lang="css" scoped>
</style>
