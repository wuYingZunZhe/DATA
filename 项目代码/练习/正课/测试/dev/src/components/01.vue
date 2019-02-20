<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>这是一个父组件！</h1>
  </div>  
</template>

<script>
export default {
  name: '父组件',
  data () {
    return {
      msg: '这是一个父组件！'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  font-weight: normal;
  color:red;
}
</style>
