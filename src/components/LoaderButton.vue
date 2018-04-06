<template>
  <a :class="loading ? 'loader' : ''" @click=clicked>
    <span class="text">{{text}}</span>
    <div class="loader">
      <div class="circle c1"></div>
      <div class="circle c2"></div>
      <div class="circle c3"></div>
    </div>
  </a>
</template>
<style scoped>
  a {
    background: #0097e6;
    padding: 10px;
    min-width: 80px;
    display: inline-block;
    text-align: center;
    text-transform: uppercase;
    box-shadow: 3px 2px 7px rgb(0, 0, 0);
    position: relative;
    height: 20px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    text-decoration: none;
  }
  a.loader .loader {
    display: flex;
  }
  a.loader .text {
    display: none;
  }
  a .loader {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    align-items: center;
    display: none;
    justify-content: center;
}
a .loader .circle {
    border-radius: 50%;
    width: 7px;
    height: 7px;
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
    65% {transform: scale(1.5)}
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
