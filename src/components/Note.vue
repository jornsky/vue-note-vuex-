<template>
    <div class="item">
        <div class="meta">
            {{updated(entity)}}
        </div>

        <div class="content">
                <div class="header" v-on:click="flag = !flag">
                    {{ header(entity) || '新建文件'}}
                </div>

                <div class="extra">
                    <editor v-bind:entity="entity"
                    v-if="flag">
                    
                    </editor>

                    {{ words(entity)}} 字

                    <i class="right floated icon" v-on:click="destory(entity)"> 删除</i>
                </div>
        </div>
</div>
</template>

<script>
import Editor from './Editor'
import { mapGetters, mapActions } from 'vuex' 

export default {

  data(){
        return {
            flag:false
        }
    },
  props:[
    'entity'
  ],
  computed:{
    ...mapGetters([
      'updated',
      'words',
      'header'
      ])
    },
  
  methods:{
    ...mapActions([
      'destory'
    ])
  },

  components:{
    Editor
  }
 
}
</script>
<style lang="css" scoped>
</style>