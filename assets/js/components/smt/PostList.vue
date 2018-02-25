<template>
  <div class="post-list">
    <Post
      v-for="post in orderedPosts"
      :key="post.postId"
      :post-id="post.postId" />

    <div
      v-if="timeline.loading"
      class="row post-list-loading">
      <img
        src="/images/ajax-loader.gif"
        alt="Now Loading...">
    </div>

    <Button
      class="post-list-loadmore"
      block
      @click.native="loadmore">
      もっと読む
    </Button>
  </div>
</template>

<script>
import Post from './Post.vue';
import Button from '../bootstrap/Button.vue';

export default {
  components: { Post, Button },

  computed: {
    timeline() {
      return this.$store.state.timeline;
    },
    orderedPosts() {
      return this.timeline.postsOrder
        .map(postId => this.$store.state.posts[postId]);
    },
  },

  async mounted() {
    await this.$store.dispatch('fetchTimelineInit');
  },

  methods: {
    async loadmore() {
      await this.$store.dispatch('fetchTimelineBackward');
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
