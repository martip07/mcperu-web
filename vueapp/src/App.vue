<template>
  <div class="background-general" id="app">
    <router-view/>
  </div>
</template>

<style>
body {
  margin: 0px;
}
.background-general {
  display: inline-block;
  width: 100%;
  height: 100%;
  /*height: 1140px;*/
  background-color: #2f2f2f;
}
@media (min-width: 1024px) {
  .background-general {
    display: inline-block;
    width: 100%;
    height: 100%;
    /*height: 1440px;*/
    background-color: #2f2f2f;
  }
}
</style>
