<template functional>
  <span
    :class="[ 'icon-' + props.iconName ]"
    role="img"
    :aria-label="props.alt" />
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
  },
};
</script>
