<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      /* Stato dell'ombra */
      isShadowActive: true,
    };
  },
  methods: {
    /* Funzione per aprire la tenda */
    openCurtain(event) {
      const curtain = event.currentTarget;
      curtain.style.width = "0"; 

      /* Controlla se entrambe le tende sono aperte*/
      const allCurtains = document.querySelectorAll("#curtain-1, #curtain-2");
      const areAllCurtainsOpen = Array.from(allCurtains).every(curtain => {
        const computedStyle = window.getComputedStyle(curtain);
        return computedStyle.width === "0px";});

      if (areAllCurtainsOpen) {
        this.isShadowActive = false; 
      }
    },
  },
};
</script>

<template>
  <div>
    <!-- Ombra -->
    <div
      v-if="isShadowActive"
      id="shadow"
    ></div>
    <!-- Tende -->
    <div class="d-flex justify-content-between">
      <div id="curtain-1" @click="openCurtain">
        <img src="../.././public/goth_curtainleft.jpg" alt="curtain" />
      </div>
      <div id="curtain-2" @click="openCurtain">
        <img src="../.././public/goth_curtainright.jpg" alt="curtain" />
      </div>
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
  z-index: 1;
  overflow: hidden;
}

img {
  width: 100%;
  height: 790px;
  transition: width 2s;
}

#shadow {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); 
  transition: opacity 2s ease;
}
</style>
