<template>
  <div class="modali" :class="state ? 'active' : ''">
      <div class="wrap"></div>
      <a @click=close class="close"><i class="fas fa-times"></i></a>
      <div class="m-cont">
          <div>
            <slot name="content"/>
          </div>
      </div>
  </div>
</template>
<script>
    export default {
        props: ['state'],
        methods: {
            close () {
                this.$emit('close')
            }
        }
    }
</script>
<style scoped>
    .modali {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: -10;
        height: 100vh;
        opacity: 0;
        transform: scale(0);
        transition: .5s;
    }
    .modali .close {
        z-index: 10;
        position: absolute;
        top: 0;
        right: 0;
        font-size: 35px;
        margin: 20px;
    }
    .m-cont {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .wrap {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(7, 7, 15, 0.884);
    }
    .modali.active {
        opacity: 1;
        transform: scale(1);
        z-index: 10000;
    }
</style>
