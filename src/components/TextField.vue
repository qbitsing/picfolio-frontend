<template>
  <div class="text-field">
        <label>
            {{title || ''}}
            <div class="text-box">
                <input :type="type || 'text'" :placeholder="placeholder" v-on="inputListeners" :value="value">
                <div class="big line"></div>
                <div class="little line"></div>
            </div>
        </label>
    </div>
</template>
<script>
export default {
  props: ['title', 'value', 'placeholder', 'type'],
  computed: {
    inputListeners: function () {
    var vm = this
    return Object.assign({},
      this.$listeners,
      {
        input: function (event) {
          vm.$emit('input', event.target.value)
        }
      }
    )
    }
  }
}
</script>
<style scoped>
    .text-field {
        width: 100%;
        margin:30px 0;
    }
    label {
        text-transform: uppercase;
    }
    input {
        background: transparent;
        border: 0;
        outline: none;
        width: 100%;
        color: rgba(221, 220, 220, 0.795);
        font-size: 15px;
    }
    input:focus + .big {
      width: 100%;
    }
    .text-box {
        padding: 10px 0;
        position: relative;
    }
    .line {
        position: absolute;
        bottom: 0;
        left: 0;
    }
    .little {
        height: 1px;
        width: 100%;
        background: rgba(221, 220, 220, 0.795);
        z-index: 0;
    }
    .big {
        background: #0097e6;
        z-index: 10;
        width: 0;
        transition: .4s;
        height: 1.7px;
    }
</style>
