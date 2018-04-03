<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Oxygen:300,400,700');
::-webkit-scrollbar {
  width: 7px;
}
::-webkit-scrollbar-thumb {
  background: rgba(255,255,255,.5);
  border-radius: 8px;
}
::-webkit-scrollbar-track {
  background: rgba(12,3,3,.9);
}
* {
  font-family: 'Oxygen', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a{
  text-decoration: none;
  cursor: pointer;
}
#app {
  color: #fff;
}
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
button.circle {
  padding: 0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
}
button:active {
  box-shadow: 6px 4px 10px rgb(0, 0, 0);
  transform: scale(.94)
}
button.block { width: 100% }
.primary {
  background: #0097e6;
  color: #fff;
}
.primary:hover {
  background: #029df0;
}
</style>
