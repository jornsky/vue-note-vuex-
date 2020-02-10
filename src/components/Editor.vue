<template>
    <div class="ui form">
        <div class="field">
            <textarea rows="5"
            placeholder="写点..." 
            v-model="entity.body"
            v-on:input="update(entity)"
            v-if="flag">

              

            </textarea>
         </div>
    
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    
    data(){
        return {
            flag:true
        }
    },

    // 从note这个组件传递过来的值
    props:[
        'entity'
    ],
    methods:{
        ...mapActions([
            'update'
        ])
    }
  
}
</script>
<style lang="css" scoped>
</style>