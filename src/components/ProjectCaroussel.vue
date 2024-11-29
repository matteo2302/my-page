<script>
export default {
  name: 'ProjectsCarousel',
 /*importo i vari componenti*/
  components: {
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
    <h1>progetti di tipo x</h1>
    <div class="projects-container d-flex">
      <div>
        <h4>project name</h4>
      <div class="project-card"></div>
      
    </div>
    <div>
        <h4>project name</h4>
      <div class="project-card"></div>
      
    </div>
    <div>
        <h4>project name</h4>
      <div class="project-card"></div>
      
    </div>
    <div>
        <h4>project name</h4>
      <div class="project-card"></div>
      
    </div>
    <div>
        <h4>project name</h4>
      <div class="project-card"></div>
      
    </div>
    <div>
        <h4>project name</h4>
      <div class="project-card"></div>
      
    </div><div>
        <h4>project name</h4>
      <div class="project-card"></div>
      
    </div><div>
        <h4>project name</h4>
      <div class="project-card"></div>
      
    </div>
    </div>
    <div>
      <li v-for="project in projects" :key="project.name">
        <a :href="project.url" target="_blank">{{ project.name }}</a>
      </li>
    </div>
  </body>

</template>



<style scoped>
.projects-container{
height: 200px;
background-color: cadetblue;
border: 1px solid transparent;
}

.project-card{
  width: 90px;
  height: 130px;
  background-color: red;
  margin-top: 20px;
  margin-left: 20px;
}
</style>