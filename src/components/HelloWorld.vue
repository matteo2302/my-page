<script>
import Curtains from './Curtains.vue'
export default {
  name: "HelloWorld",
  /*importo il componente chiamato in precednza hello world*/
  components: {
    Curtains
  },
  data() {
    return {
    };
  },
  methods: {

  },
};


</script>

<template>
<!-- Tende -->
 <Curtains/>
    <!-- myself header -->
    <div class="background-photo d-flex justify-content-around">
      <div class="my-photo"></div>
      <div class="myself">
        <h1>mattep pizzichemi web developer</h1>
      </div>
    </div>
    
  
</template>



<style scoped>
#curtain-2,
#curtain-1 {
  width: 45%;
  height: 100vh;
  background-color: green;
  transition: width 2s;
  z-index: 2;
  overflow: hidden;
  position: fixed;
}
#curtain-1 {
  left: 0; 
  width: 45%; 
}

#curtain-2 {
  right: 0; 
  width: 45%;
}


img {
  width: 100%;
  height: 790px;
  transition: width 2s;
}
.active-shadow,
.white-background{
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vw;
  z-index: 1;
}

.active-shadow {
  background-color: rgba(0, 0, 0, 0.7);
  transition: background-color 2s ease; 
}

.white-background {
  background-color: rgba(0, 0, 0, 0);
  transition: background-color 2s ease;
  pointer-events: none;
}
 .background-photo{
  height: 300px;
  background-color: green;
  width: 100%;
 }
 .my-photo{
  width: 150px;
  height: 100%;
  background-color: red;
 }
 .myself{
  background-color: purple;
  width: 600px;
  height: 200px;
  margin-top: 50px;
  h1{
    font-size: 65px
  }
}
</style>
