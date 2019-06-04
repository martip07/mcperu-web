<template>
  <div class="mine_peru">
      <img src="img/logos/mine-peru.svg" alt="">
      <div class="line-separator"></div>
  </div>
</template>

<script>
export default {
  name: "Header",
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
.mine_peru {
  text-align: center;
  display: block;
  width: 100%;
  height: 182px;
}
.mine_peru > img {
  padding-top: 40px;
}
.line-separator {
  margin: 0px;
  display: inline-block;
  width: 90%;
  height: 16px;
  background-color: #2f2f2f;
}
@media (min-width: 728px) {
  .mine_peru {
    text-align: center;
    display: block;
    width: 100%;
    height: 182px;
  }
  .mine_peru > img {
    padding-top: 40px;
    width: 198px;
    height: 142px;
  }
}
@media (min-width: 1024px) {
  .mine_peru {
    text-align: center;
    display: block;
    width: 100%;
    height: 182px;
  }
  .mine_peru > img {
    padding-top: 40px;
    width: 266px;
    height: 174px;
  }
}
</style>
