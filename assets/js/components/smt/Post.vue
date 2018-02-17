<template>
  <div class="timeline-post">
    <div
      class="only-border-top"
      v-if="isProtected" />

    <div class="post-member-image">
      <a :href="activity.member.profile_url">
        <img
          :src="activity.member.profile_image"
          :alt="activity.member.name">
      </a>
    </div>

    <div class="post-content">
      <div class="post-member-name">
        <a :href="activity.member.profile_url">{{ activity.member.name }}</a>
        <a
          :href="'/timeline/show/id/' + activity.id"
          class="timestamp">
          <time>{{ activity.created_at }}</time>
        </a>
      </div>
      <div
        class="post-body"
        v-html="activity.body_html" />
    </div>

    <div class="post-control">
      <a href="#">コメントする</a>
      <template v-if="isProtected">
        <span
          class="icon-lock"
          aria-label="🔒" />
        <span
          class="public-flag"
          v-if="activity.public_status === 'friend'">
          マイフレンドまで
        </span>
        <span
          class="public-flag"
          v-if="activity.public_status === 'private'">
          公開しない
        </span>
      </template>
    </div>

    <div class="comment-list">
      <template v-if="!collapseCommentList">
        <Comment />
        <form class="comment-form">
          <input
            class="comment-form-input-body"
            type="text">
          <button
            class="btn btn-primary comment-form-button-submit"
            disabled="disabled">
            投稿
          </button>
        </form>
      </template>
    </div>

    <div
      class="only-border-bottom"
      v-if="isProtected" />
  </div>
</template>

<script>
import Comment from './Comment.vue';

export default {
  components: { Comment },

  data() {
    return {
      collapseCommentList: false,
      activity: {
        id: 2,
        body_html: 'ててて',
        public_status: 'friend',
        created_at: 'Thu, 15 Feb 2018 04:30:59 +0900',
        member: {
          name: 'OpenPNE 君',
          profile_url: 'http://v39.localhost/member/1',
          profile_image: 'http://v39.localhost/images/no_image.gif',
        },
      },
    };
  },

  computed: {
    isProtected() {
      return this.activity.public_status === 'friend' || this.activity.public_status === 'private';
    },
  },
};
</script>

<style lang="scss" scoped>
.timeline-post {
  padding: 5px 0;
  border-top: 2px solid #DDD;
}

.post-member-image {
  float: left;
  width: 25px;

  img {
    width: 23px;
    border-radius: 6px;
  }
}

.post-content {
  float: left;
  width: 295px;

  .post-member-name {
    width: 285px;
    display: block;
    padding: 0 5px;
    font-weight: bold;
    margin-top: -3px;
  }

  .timestamp {
    color: #999 !important;
    font-weight: normal;
    font-size: x-small;
  }

  .post-body {
    width: 285px;
    display: block;
    padding: 15px 5px;
  }
}

.post-control {
  display: block;
  margin-left: 25px;
  padding: 0 5px;
  font-size: 12px;
}

.only-border-top {
  border-top: dotted 10px #e7eaf2;
  padding: 0 0 7px;
  margin-top: -3px;
}

.only-border-bottom {
  border-top: dotted 10px #e7eaf2;
  padding: 7px 0 0 0;
  margin-bottom: -10px;
}

.comment-list {
  width: 295px;
  margin-left: 25px;
  margin-top: 10px;
  background-color: whiteSmoke;

  .comment-form {
    width: 285px;
    padding: 5px;
    margin-bottom: 0;
    border-top: 1px solid #DDD;

    .comment-form-input-body {
      width: 238px;
      height: 15px;
      padding: 2px;
      margin-bottom: 0px;
      margin-right: 2px;
    }

    .comment-form-button-submit {
      padding: 2px 6px;
      font-size: 11px;
      line-height: 14px;
    }
  }
}
</style>
