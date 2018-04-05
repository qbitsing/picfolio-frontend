<template>
  <div class="modal" :class="active ? 'active' : ''">
      <div class="wrap"></div>
      <a @click=close><i class="fas fa-times"></i></a>
      <div class="content">
          <slot name="content"/>
      </div>
  </div>
</template>
<script>
    export default {
        props: ['state'],
        computed: {
            active () {
                return this.state
            }
        },
        methods: {
            close () {
                this.$emit('close')
            }
        }
    }
</script>
<style>
    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: -10;
        height: 100vh;
    }
    .modal.active {
        z-index: 10;
    }
</style>
