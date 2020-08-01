<template>
  <div class="minecraftbox">
      <h4>Noticias, tutoriales, descargas de Minecraft en <a href="https://minecraftbox.net">Minecraftbox</a></h4>
      <img src="@/assets/minecraftbox-logo-2px-png-1.png" alt="Minecraftbox" />
  </div>
</template>

<script>
export default {
  name: "minecraftbox",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  margin: 0px;
}
.minecraftbox {
  display: block;
  margin-top: 77px;
  text-align: center;
  font-family: "Karla", "sans-serif";
}
.minecraftbox > h4 {
  font-size: 15px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  display: block;
  color: #000000;
}
.minecraftbox > p {
  font-size: 15px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
}
.minecraftbox > img {
  margin-top: 2%;
  width: 17%;
}
.span {
  color: #62b969;
}
@media (min-width: 728px) {
  .minecraftbox > h4 {
    font-size: 20px;
  }
  .minecraftbox > p {
    font-size: 20px;
  }
}
</style>
