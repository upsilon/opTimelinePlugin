<template>
  <div class="post-list">
    <Post />

    <div
      v-if="loading"
      class="row post-list-loading">
      <img
        src="/images/ajax-loader.gif"
        alt="Now Loading...">
    </div>

    <div class="row">
      <button class="btn btn-block post-list-loadmore">もっと読む</button>
    </div>
  </div>
</template>

<script>
import Post from './Post.vue';

export default {
  components: { Post },

  data() {
    return {
      loading: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@mixin block-center {
  margin: { left: auto; right: auto };
}

.post-list-loading {
  @include block-center;
  margin-top: 20px;
  margin-bottom: 20px;
}

.post-list-loadmore {
  margin-top: 4px;
}
</style>
