<template>
  <div class="background-body">
    <Header />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";

export default {
  name: "home",
  components: {
    Header
  }
};
</script>
<style scoped>
body{
  margin: 0px;
}
.background-body {
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  margin-top: 20px;
  display: block;
  max-width: 100%;
  height: 1100px;
  background-color: #ffffff;
}
</style>
