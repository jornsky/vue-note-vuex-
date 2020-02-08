<template>
  <div class="ui container notes">
    <h4 class="ui horizontal divider header">
            <i class="paw icon">jifeng Notes</i>
    </h4>
    <a class="ui right floated basic violet button">
        添加笔记
    
    </a>

    <div class="ui divided items">

        <note v-for="entity in entities"
        v-bind:entity="entity">
        
        
        </note>
        <span v-if="!entities.length"class="ui small disabled header"  >还没有添加记录，赶快来添加吧</span>
       
        
    </div>
   
       
</div>
</template>

<script>
import Note from './Note'
import { mapGetters } from 'vuex'

export default {
  computed:{
    ...mapGetters([
      'entities'
    ])
  },
  components:{
    Note
  }
 
}
</script>
<style lang="css" scoped>
</style>