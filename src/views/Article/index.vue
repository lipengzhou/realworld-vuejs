<template>
  <div class="article-page">

    <div class="banner">
      <div class="container">

        <h1>{{ article.title }}</h1>

        <ArticleMeta :article="article" @following="onFollowing"/>

      </div>
    </div>

    <div class="container page">

      <div class="row article-content">
        <div class="col-md-12" v-html="article.body"></div>
      </div>

      <hr />

      <div class="article-actions">
        <ArticleMeta :article="article" @following="onFollowing"/>
      </div>

      <div class="row">

        <div class="col-xs-12 col-md-8 offset-md-2">
          <form class="card comment-form" v-if="$store.state.user">
            <div class="card-block">
              <textarea
                class="form-control"
                placeholder="Write a comment..."
                rows="3"
                v-model="commentBody"></textarea>
            </div>
            <div class="card-footer">
              <img :src="user.image || '/img/default-avatar.jpg'" class="comment-author-img" />
              <button class="btn btn-sm btn-primary" @click.prevent="onSubmitComment(slug, commentBody)">
               Post Comment
              </button>
            </div>
          </form>
          <p style="display: inherit;" v-else>
            <a ui-sref="app.login" href="#/login">Sign in</a> or <a ui-sref="app.register" href="#/register">sign up</a> to add comments on this article.
          </p>

          <!-- 评论列表 -->
          <div class="card" v-for="item in comments">
            <div class="card-block">
              <p class="card-text">{{ item.body }}</p>
            </div>
            <div class="card-footer">
              <a href="" class="comment-author">
                <img :src="item.author.image" class="comment-author-img" />
              </a>
              &nbsp;
              <a href="" class="comment-author">{{ item.author.username }}</a>
              <span class="date-posted">{{ item.createdAt | formatDate }}</span>
            </div>
          </div>
          <!-- 评论列表 -->

        </div>

      </div>

    </div>

  </div>
</template>

<script>
import { getArticle } from '@/api/article'
import { getComments, createComment } from '@/api/comment'
import { followUser, unFollowUser } from '@/api/user'
import marked from 'marked'
import { mapState } from 'vuex'
import ArticleMeta from './article-meta'

export default {
  name: 'ArticleDetail',

  components: {
    ArticleMeta
  },

  props: ['slug'],

  data () {
    return {
      article: {
        author: {}
      },
      comments: [],
      commentBody: ''
    }
  },

  computed: {
    ...mapState(['user'])
  },

  created () {
    this.loadArticle(this.slug)
    this.loadComments(this.slug)
  },

  methods: {
    async loadArticle (slug) {
      try {
        const { data } = await getArticle(slug)
        data.article.body = marked(data.article.body)
        this.article = data.article
      } catch (err) {
        console.log(err)
      }
    },

    async loadComments (slug) {
      try {
        const { data } = await getComments(slug)
        this.comments = data.comments
      } catch (err) {
        console.log(err)
      }
    },

    async onSubmitComment (slug, body) {
      const { data } = await createComment(slug, body)
      this.commentBody = ''
      this.loadComments(slug)
    },

    async onFollowing (username, following) {
      let res = null
      if (following) { // 关注
        res = await followUser(username)
      } else { // 取关
        res = await unFollowUser(username)
      }
      this.article.author = res.data.profile
    }
  }
}
</script>

<style scoped>
</style>
