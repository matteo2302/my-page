<script>
import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
  /*importo il componente chiamato in precednza hello world*/
  components: {
    HelloWorld
  }
}

</script>


<template>

  <body>
    <main>
      <HelloWorld />
    </main>
  </body>

</template>



<style scoped></style>
