<script>
/*esporto hello world per visualizzarlo in app vue*/
export default {
  name: 'HelloWorld',
  methods: {
    /*uso @click per la tenda*/
    openCurtain() {
      console.log("dio sporco");
      const curtain = event.currentTarget; // Riferimento sempre al <div> che gestisce il click
        curtain.style.width = "0"; // Cambia la larghezza del div

    }
  }
};

</script>

<template>

  <body>
    <div class="d-flex justify-content-between">
      <div id="curtain-1" @click="openCurtain">
      <img src="../.././public/goth_curtainleft.jpg" alt="curtain"></div>
      <div id="curtain-2" @click="openCurtain">
        <img src="../.././public/goth_curtainright.jpg" alt="curtain">
      </div>
    </div>
  </body>

</template>

<style scoped>
#curtain-2,
#curtain-1 {
  width: 45%;
  height: 50px;
  background-color: green;
  transition: width 2s;
}

img{
  width: 100%;
  height: 790px;
}
</style>
