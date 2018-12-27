function formattedSpell(spell) {
  return spell.toLowerCase().replace(/\s/g, "")
}
Vue.component("special-spell", {
  props: ["spell", "is_special_spell"],
  data: function(){
    return {
      "is_active": this.is_special_spell,
      "object_picked": this.haveObjects() ? "Choose One.." : this.spell.medium,
      "effect": this.spell.effect
    }
  },
  template: `
  <div :class="['special-spell', {'show': is_active}]">
    <div :class="['box', {'animation--popping': is_active}]">
      <button class="box__btn-close" @click="closeBox; $emit('purify')">X</button>
      <div class="box__header"> </div>
      <div class="box__body">
        <h2>{{ spell['special-spell'].title }}</h2>
        <p>{{ spell['special-spell'].desc }}</p>
        <div class="object-group">
          <label :class="['object-group__item', {'object-group__item--selected': object == object_picked}]" v-for="object in spell['special-spell'].objects">
            <input type="radio" :id="object" :value="object" v-model="object_picked">
            <img class="" :src="'emojis/'+object+'.png'" />
          </label>
        </div>
        <p>{{ haveObjects() ? object_picked : '' }}</p>
      </div>
      <div class="box__footer">
        <button :class="'btn btn--block btn--'+spell['special-spell'].type" @click="$emit('picked', [object_picked, effect])" :disabled="haveObjects() && object_picked == 'Choose One..'">Confirm</button>
      </div>
    </div>
  </div>
  `,
  methods: {
    closeBox: function(){
      this.is_active = false
      return
    },
    haveObjects: function(){ return this.spell['special-spell'].objects.length > 0 }
  }
})
Vue.component("medium", {
  props: ["emoji", "effect"],
  template: `<img :class="[ 'medium', effect ]" :src="objSrc" alt="">`,
  computed: {
    objSrc: function(){
      return `emojis/`+this.emoji+`.png`
    }
  }
})
var vm = new Vue({
  el:"#app",
  data: {
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
  },
  methods: {
    chant: function(){
      for( spell_index in this.spell_directory ){
        let spell = this.spell_directory[spell_index]
        if ( formattedSpell(spell.name) == formattedSpell(this.spell.chant) ) {
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
      console.log(medium)
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
})
