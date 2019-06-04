<template>
  <div class="footer">
      <h4>Powered by <span class="span">serverghost</span></h4>
      <p>2017 - 2019</p>
  </div>
</template>

<script>
export default {
  name: "Footer",
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
.footer {
  display: block;
  margin-top: 77px;
  text-align: center;
  font-family: "Karla", "sans-serif";
}
.footer > h4 {
  font-size: 15px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  display: block;
  color: #000000;
}
.footer > p {
  font-size: 15px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
}
.span {
  color: #62b969;
}
@media (min-width: 728px) {
  .footer > h4 {
    font-size: 20px;
  }
  .footer > p {
    font-size: 20px;
  }
}
</style>
