<template lang="html">
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
</template>

<script>
export default {
  name: 'SpecialSpell',
  props: {
    spell: Object,
    is_special_spell: Boolean
  },
  data () {
    return {
      is_active: this.is_special_spell,
      object_picked: this.haveObjects() ? "Choose One.." : this.spell.medium,
      effect: this.spell.effect
    }
  },
  methods: {
    closeBox: function(){
      this.is_active = false
      return
    },
    haveObjects: function(){ return this.spell['special-spell'].objects.length > 0 }
  }
}
</script>

<style lang="css" scoped>
</style>
