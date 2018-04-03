<template>
  <button @click.prevent :style="`background: ${color}`" :class="block? 'block' : null">{{text}}</button>
</template>
<style scoped>
  button {
    padding: 10px 40px;
    border: 0;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #fff;
    outline: none;
    font-size: 17px;
    border-radius: 4px;
    cursor: pointer;
    transition: .2s;
    box-shadow: 3px 2px 7px rgb(0, 0, 0);
  }
  button:active {
    box-shadow: 6px 4px 10px rgb(0, 0, 0);
    transform: scale(.94)
  }
</style>
<script>
export default {
  props: ['text', 'color', 'block']
}
</script>