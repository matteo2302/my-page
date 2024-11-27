<script>
import Curtains from './components/Curtains.vue'
import Myself from './components/Myself.vue'
import ProjectsCarousel from './components/ProjectCaroussel.vue';
export default {
  name: 'App',
 /*importo i vari componenti*/
  components: {
    Curtains,Myself,ProjectsCarousel
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
      <!-- project carousel-->
      <ProjectsCarousel/>
    </main>
  </body>

</template>



<style scoped></style>
