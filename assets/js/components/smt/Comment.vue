<template>
  <div class="post-comment">
    <div class="post-comment-member-image">
      <a :href="activity.member.profile_url">
        <img
          :src="activity.member.profile_image"
          :alt="activity.member.name">
      </a>
    </div>

    <div class="post-comment-content">
      <div class="post-comment-name">
        <a :href="activity.member.profile_url">{{ activity.member.name }}</a>
      </div>
    </div>

    <div class="timestamp">
      <time>{{ activity.created_at }}</time>
    </div>

    <div
      class="post-comment-body"
      v-html="activity.body_html" />
  </div>
</template>

<script>
export default {
  computed: {
    comment() {
      return this.$store.state.comments['comment-1'];
    },
    activity() {
      return this.$store.state.activities[this.comment.activityId];
    },
  },
};
</script>

<style lang="scss" scoped>
.post-comment {
  width: 285px;
  display: block;
  padding: 5px;
  border-top: 1px solid #DDD;
}

.post-comment-member-image {
  float: left;
  width: 23px;

  img {
    width: 23px;
    border-radius: 6px;
  }
}

.post-comment-content {
  float: right;
  width: 257px;
}

.post-comment-name {
  display: inline;
  float: left;
  font-size: 12px;
  font-weight: bold;
  margin-top: -3px;
}

.timestamp {
  display: block;
  width: 262px;
  margin-left: 28px;
  font-size: 11px;
}

.post-comment-body {
  font-size: 11px;
  margin-left: 28px;
  padding: 5px 0;
}
</style>
