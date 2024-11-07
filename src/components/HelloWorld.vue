<script>
/*esporto hello world per visualizzarlo in app vue*/
export default {
  name: 'HelloWorld',
  methods: {
    /*uso @click per la tenda*/
    openCurtain() {
      console.log("dio sporco")
    }
  }
};

</script>

<template>

  <body>
    <div class="d-flex justify-content-between">
      <div id="curtain-1" @click="openCurtain"></div>
      <div id="curtain-2" @click="openCurtain"></div>
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

#curtain-2:hover,
#curtain-1:hover {
  width: 15%;
}
</style>
