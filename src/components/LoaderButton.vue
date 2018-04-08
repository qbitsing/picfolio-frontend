<template>
  <a :class="loading ? 'loading my-bt' : 'my-bt'" @click=clicked>
    <span class="text">{{text}}</span>
    <div class="loader">
      <div class="circle c1"></div>
      <div class="circle c2"></div>
      <div class="circle c3"></div>
    </div>
  </a>
</template>
<style scoped>
  .my-bt {
    background: #0097e6;
    padding: 10px;
    color: #fff;
    display: flex;
    text-align: center;
    text-transform: uppercase;
    box-shadow: 3px 2px 7px rgb(0, 0, 0);
    position: relative;
    height: 35px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    text-decoration: none;
    transition: .3s;
  }
  .my-bt:hover {
    background: #029df0;
  }
  .my-bt:active {
    box-shadow: 6px 4px 10px rgb(0, 0, 0);
    transform: scale(.95)
  }
  a.loading .loader {
    opacity: 1;
  }
  a.loading .text {
    opacity: 0;  
  }
  a .text {
    transition: .2s;
  }
  a .loader {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    align-items: center;
    display: flex;
    transition: .3s;
    opacity: 0;
    justify-content: center;
}
a .loader .circle {
    border-radius: 50%;
    width: 10px;
    height: 10px;
    background: #fff;
    margin: 4px;
  }
  .circle.c1 {
    animation: circle 1.5s ease-in 0s infinite;
  }
  .circle.c2 {
    animation: circle 1.5s ease-in .2s infinite;
  }
  .circle.c3 {
    animation: circle 1.5s ease-in .4s infinite;
  }
  @keyframes circle {
    0% { transform: scale(0) }
    30% { transform: scale(0) }
    65% {transform: scale(1)}
    100% { transform: scale(0) }
  }
</style>
<script>
    export default {
      props: ['loading', 'text'],
      methods: {
        clicked (ev) {
          ev.preventDefault()
          this.$emit('click')
        }
      }
    }
</script>
