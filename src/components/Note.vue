<template>
    <div class="item">
        <div class="meta">
            {{'updated'}}
        </div>

        <div class="content">
                <div class="header">
                    {{ entity.body || '新建文件'}}
                </div>

                <div class="extra">
                    <editor>
                    
                    </editor>

                    {{ 'words'}} 字

                    <i class="right floated icon"> 删除</i>
                </div>
        </div>
</div>
</template>

<script>
import Editor from './Editor'
export default {
  props:[
    'entity'
  ],

  components:{
    Editor
  }
 
}
</script>
<style lang="css" scoped>
</style>