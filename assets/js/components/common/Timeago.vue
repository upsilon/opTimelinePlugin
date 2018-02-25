<template functional>
  <time :datetime="props.time | moment">
    {{ props.time | moment('from', 'now') }}
  </time>
</template>

<script>
export default {
  props: {
    time: {
      type: String,
      required: true,
    },
  },
};
</script>
