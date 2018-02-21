<template>
  <button
    :class="classes"
    :disabled="disabled">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    primary: {
      type: Boolean,
      required: false,
      default: false,
    },
    block: {
      type: Boolean,
      required: false,
      default: false,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    classes() {
      return {
        btn: true,
        'btn-primary': this.primary,
        'btn-block': this.block,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
// backport from bootstrap v2.1.0
.btn-block {
  display: block;
  width: 100%;
  padding: { left: 0; right: 0 }
  box-sizing: border-box;
}
</style>
