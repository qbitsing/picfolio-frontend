<template>
  <header ref="header">
    <div class="title">
      <h1>Nicolás Arias</h1>
      <button class="circle primary"><i class="fas fa-pencil-alt"></i></button>
    </div>
    <h3>This is my awesome cover fuckers!</h3>
    <a @click=goDown><i class="fas fa-angle-down"></i></a>
    <button class="primary">
      <i class="fas fa-camera"></i>
      Upload photo
    </button>
  </header>
</template>
<script>
  export default {
    methods: {
      goDown() {
        window.$('html,body').animate({
          scrollTop: $(this.$refs.header).outerHeight()},
          'slow');
      }
    }
  }
</script>
<style>
header {
  background-image: url('~@/assets/smoke.png');
  background-color: rgba(12,3,3,.9);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
header h1 {
  font-size: 80px;
  margin: 0 25px;
}
.title {
  display: flex;
  align-items: center;
  justify-content: center;
}
header>h3 {
  font-size: 17px;
  text-shadow: 1px 1px rgba(121, 58, 58, 0.356);
  margin: 20px 0;
  transition: .3s;
}
header>h3:hover {
  text-shadow: 1px 1px 2px rgba(241, 233, 233, 0.92);
}
header>a {
  font-size: 55px;
  transition-duration: .3s, .5s, .5s;
  transition-property: color, font-size, background, transform;
  background: white;
  width: 60px;
  height: 60px;
  display: flex;
  color: rgba(38, 122, 247, 0.95) !important;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}
header>a:hover {
  color: rgba(12,3,3,.8) !important;
  background: rgba(241, 233, 233, 0.4);
  font-size: 65px;
  transform: scale(1.1)
}
button {
  margin: 20px 0;
}
</style>
