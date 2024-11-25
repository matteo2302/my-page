<script>
export default {
  name: "Myself",
  components: {
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
    <!--myself description-->
    <div class="d-flex">
      <div class="description">description</div>
      <div class="w-studied">dove ho </div>
    </div>
    <div class="d-flex justify-content-center">linguaggi che conosco</div>
  
</template>



<style scoped>

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
.description{
  background-color: yellow;
  height: 300px;
  width: 50%;
}
.w-studied{
  background-color: magenta;
height: 300px;
width: 50%;
}
</style>