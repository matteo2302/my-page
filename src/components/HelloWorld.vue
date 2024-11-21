<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      /*ombra che copre ciò che sta sotto */
      isShadowActive: true,
      /*array che controlla se entrambe le tende siano state cliccate */ 
      openedCurtains: [], 
    };
  },
  methods: {
    /*apertura tende e gestione dell'ombra*/ 
    openCurtain(event, curtainId) {
      const curtain = event.currentTarget;
      curtain.style.width = "0";

      /* Aggiungo l'ID della tenda all'array se non è già presente*/
      if (!this.openedCurtains.includes(curtainId)) {
        this.openedCurtains.push(curtainId);
      }

      /* Se entrambe le tende sono state aperte, rendo false isShadowActive*/
      if (this.openedCurtains.length > 1) {
        this.isShadowActive = false;
      }
    },
  },
};


</script>

<template>
<!-- Tende -->
<div class="d-flex justify-content-between">
      <div id="curtain-1" @click="event => openCurtain(event, 'curtain1')">
        <img src="../.././public/goth_curtainleft.jpg" alt="curtain" />
      </div>
      <div id="curtain-2" @click="event => openCurtain(event, 'curtain2')">
        <img src="../.././public/goth_curtainright.jpg" alt="curtain" />
      </div>
    </div>
  <!-- Ombra -->
  <div :class="{ 'active-shadow': isShadowActive, 'white-background': !isShadowActive }">
    <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)vLorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptatem!lorem(10)</div>
    
    
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

.active-shadow {
  background-color: rgba(0, 0, 0, 0.7);
  transition: background-color 2s ease;
}

.white-background {
  background-color: white;
  transition: background-color 2s ease;
}

</style>
