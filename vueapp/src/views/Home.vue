<template>
  <div class="background-body">
    <Header />
      <div class="container">
        <div class="columns">
          <div class="column is-full">
            <div class="background-creeper">
              <div class="creeper-face">
                <div class="creeper-main-1">
                  <div class="creeper-mouth-1"></div>
                  <div class="creeper-mouth-2"></div>
                  <div class="creeper-eye-left"></div>
                  <div class="creeper-eye-right"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <HomeBlog />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import HomeBlog from "@/components/HomeBlog.vue";

export default {
  name: "home",
  components: {
    Header,
    Footer,
    HomeBlog
  }
};
</script>
<style scoped>
body {
  margin: 0px;
}
.background-body {
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  margin-top: 20px;
  display: block;
  max-width: 100%;
  height: 100%;
  /*height: 1100px;*/
  text-align: center;
  background-color: #ffffff;
}
.background-creeper {
  margin-left: 10px;
  margin-right: 10px;
  max-width: 100%;
  height: 680px;
  display: block;
  background-color: #62b969;
}
.creeper-face {
  margin-top: 55px;
  text-align: center;
}
.creeper-eye-left {
  width: 70px;
  height: 70px;
  background-color: #484649;
  position: absolute;
  right: 70px;
  top: -70px;
}
.creeper-eye-right {
  width: 70px;
  height: 70px;
  background-color: #484649;
  position: absolute;
  left: 70px;
  top: -70px;
}
.creeper-main-1 {
  margin: 0px auto;
  width: 70px;
  height: 140px;
  background-color: #484649;
  position: relative;
  top: 187.1px;
}
.creeper-mouth-1 {
  width: 35px;
  height: 140px;
  background-color: #484649;
  position: absolute;
  right: 70px;
  top: 70px;
}
.creeper-mouth-2 {
  width: 35px;
  height: 140px;
  background-color: #484649;
  position: absolute;
  left: 70px;
  top: 70px;
}
@media (min-width: 728px) {
  .background-creeper {
    margin-left: 124px;
    margin-right: 124px;
    max-width: 100%;
    height: 680px;
    display: block;
    background-color: #62b969;
  }
  .creeper-face {
    margin-top: 55px;
    text-align: center;
  }
  .creeper-eye-left {
    width: 80px;
    height: 80px;
    background-color: #484649;
    position: absolute;
    right: 80px;
    top: -80px;
  }
  .creeper-eye-right {
    width: 80px;
    height: 80px;
    background-color: #484649;
    position: absolute;
    left: 80px;
    top: -80px;
  }
  .creeper-main-1 {
    margin: 0px auto;
    width: 80px;
    height: 160px;
    background-color: #484649;
    position: relative;
    top: 187.1px;
  }
  .creeper-mouth-1 {
    width: 40px;
    height: 160px;
    background-color: #484649;
    position: absolute;
    right: 80px;
    top: 80px;
  }
  .creeper-mouth-2 {
    width: 40px;
    height: 160px;
    background-color: #484649;
    position: absolute;
    left: 80px;
    top: 80px;
  }
}
@media (min-width: 1024px) {
  .background-body {
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
    margin-top: 20px;
    display: block;
    max-width: 100%;
    /*height: 1400px;*/
    height: 100%;
    text-align: center;
    background-color: #ffffff;
  }
  .background-creeper {
    margin-left: 148px;
    margin-right: 148px;
    max-width: 100%;
    height: 880px;
    display: block;
    background-color: #62b969;
  }
  .creeper-face {
    margin-top: 155px;
    text-align: center;
  }
  .creeper-eye-left {
    width: 90px;
    height: 90px;
    background-color: #484649;
    position: absolute;
    right: 90px;
    top: -90px;
  }
  .creeper-eye-right {
    width: 90px;
    height: 90px;
    background-color: #484649;
    position: absolute;
    left: 90px;
    top: -90px;
  }
  .creeper-main-1 {
    margin: 0px auto;
    width: 90px;
    height: 180px;
    background-color: #484649;
    position: relative;
    top: 250.1px;
  }
  .creeper-mouth-1 {
    width: 45px;
    height: 180px;
    background-color: #484649;
    position: absolute;
    right: 89px;
    top: 90px;
  }
  .creeper-mouth-2 {
    width: 45px;
    height: 180px;
    background-color: #484649;
    position: absolute;
    left: 89px;
    top: 90px;
  }
}
@media (min-width: 1440px) {
  .background-creeper {
    margin-left: 360px;
    margin-right: 360px;
    max-width: 100%;
    height: 880px;
    display: block;
    background-color: #62b969;
  }
}
</style>
