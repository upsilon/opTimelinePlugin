<template>
  <div class="post-list">
    <Post
      v-for="post in orderedPosts"
      :key="post.postId"
      :post-id="post.postId" />

    <div
      v-if="loading"
      class="row post-list-loading">
      <img
        src="/images/ajax-loader.gif"
        alt="Now Loading...">
    </div>

    <Button
      class="post-list-loadmore"
      block>
      もっと読む
    </Button>
  </div>
</template>

<script>
import Post from './Post.vue';
import Button from '../bootstrap/Button.vue';

export default {
  components: { Post, Button },

  data() {
    return {
      loading: false,
    };
  },

  computed: {
    orderedPosts() {
      return this.$store.state.postsOrder
        .map(postId => this.$store.state.posts[postId]);
    },
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
