<template>
  <div id="app">
    <Notes></Notes>
  </div>
</template>

<script>
import 'semantic-ui-css/semantic.min.css'
import Notes from './components/Notes'

export default {
  name: 'App',
  components: {
    Notes    
}

}
</script>

<style>
.notes{
    margin-top: 32px;
}

.notes .ui textarea{
    border: none;
    font-size: 16px;
    padding: 0;
    margin: 32px 1px;

}

.ui .items > .item > .content > .header {
    display: block;
    cursor: pointer;
}

.ui .items > .item > .meta{
     width: 88px;
     color: black;
     margin-top: 0px;
     margin-bottom: 16px;     
}

.icon {
    cursor: pointer;
}
</style>
