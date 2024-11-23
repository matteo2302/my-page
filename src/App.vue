<script>
import Curtains from './components/Curtains.vue'
import Myself from './components/Myself.vue'
export default {
  name: 'App',
 /*importo i vari componenti*/
  components: {
    Curtains,Myself
  },
  data() {
    return {
    };
  },
  methods: {

  },
}

</script>


<template>

  <body>
    <main>
      <!-- Tende -->
      <Curtains/>
      <!-- myself-->
      <Myself/>
    </main>
  </body>

</template>



<style scoped></style>
