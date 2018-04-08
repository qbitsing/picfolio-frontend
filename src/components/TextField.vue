<template>
  <div class="iput-field">
        <label>
            {{title || ''}}
            <input :type="type || 'text'" :placeholder="placeholder" v-on="inputListeners" :value="value">
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
    label {
        text-transform: uppercase;
        font-family: 'Oxygen' sans-serif;
        font-size: 16px;
    }
    input:focus {
        border-bottom: 1px solid #0097e6 !important;
        box-shadow: 0 1px 0 0 #0097e6 !important;
    }
    input {
        color: #fff !important;
    }
</style>
