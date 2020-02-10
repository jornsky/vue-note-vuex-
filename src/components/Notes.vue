<template>
  <div class="ui container notes">
    <h4 class="ui horizontal divider header">
            <i class="paw icon">jifeng Notes</i>
    </h4>
    <a class="ui right floated basic violet button" v-on:click="create">
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
import { mapGetters,mapActions } from 'vuex'

export default {
  created () {
    this.initial()
  },
  methods:{
    // 使用store中的action的initial动作 获取mutaition的数据
    ...mapActions([
      'initial',
      'create'
    ])
  },
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