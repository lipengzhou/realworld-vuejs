<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>
    <div class="container page">
      <div class="row">

        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item" v-if="$store.state.user">
                <a class="nav-link disabled" href="#">Your Feed</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">Global Feed</a>
              </li>
            </ul>
          </div>

          <!-- 文章列表 -->
          <div class="article-preview" v-for="(item, index) in articles" :key="index">
            <div class="article-meta">
              <a href="profile.html"><img :src="item.author.image || '/img/default-avatar.jpg'" /></a>
              <div class="info">
                <a href="" class="author">{{ item.author.username }}</a>
                <span class="date">{{ item.createdAt | formatDate }}</span>
              </div>
              <button class="btn btn-outline-primary btn-sm pull-xs-right">
                <i class="ion-heart"></i> {{ item.favoritesCount }}
              </button>
            </div>
            <a href="#" class="preview-link">
              <h1>{{ item.title }}</h1>
              <p>{{ item.description }}</p>
              <span @click.prevent="$router.push({ name: 'article-detail', params: { slug: item.slug } })">Read more...</span>
              <ul class="tag-list" v-if="item.tagList.length">
                <li
                  class="tag-default tag-pill tag-outline ng-binding ng-scope"
                  v-for="(tag, index) in item.tagList" :key="index">{{ tag }}</li>
              </ul>
            </a>
          </div>
          <!-- /文章列表 -->

          <!-- 加载提示 -->
          <div class="article-preview">
            <p v-show="loading">Loading articles...</p>
            <p v-if="!articles.length">No articles are here... yet.</p>
          </div>
          <!-- /加载提示 -->

          <!-- 分页 -->
          <nav>
            <ul class="pagination">
              <li
                class="page-item"
                :class="{ active: item === page }"
                v-for="(item, index) in totalPage"
                :key="index">
                <a class="page-link" href="#" @click.prevent="page = item">{{ item }}</a>
              </li>
            </ul>
          </nav>
          <!-- /分页 -->
        </div>

        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>

            <div class="tag-list">
              <a
                href=""
                class="tag-pill tag-default"
                v-for="(item, index) in tags"
                :key="index">{{ item }}</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { getArticleList } from '@/api/article'
import { getTagList } from '@/api/tag'
import nprogress from 'nprogress'

export default {
  name: 'AppHome',

  data () {
    return {
      articles: [],
      articlesCount: 0,
      pageSize: 10,
      page: 1,
      loading: true,
      tags: []
    }
  },

  computed: {
    totalPage () {
      return Math.ceil(this.articlesCount / this.pageSize)
    }
  },

  watch: {
    page: {
      async handler (val) {
        nprogress.start()
        this.loading = true
        await this.loadArticles(val)
        nprogress.done()
        this.loading = false
      },
      immediate: true
    }
  },

  created () {
    this.loadTags()
  },

  methods: {
    async loadArticles (page = 1) {
      const { data } = await getArticleList({
        page,
        pageSize: this.pageSize
      })
      this.articles = data.articles
      this.articlesCount = data.articlesCount
    },

    async loadTags () {
      const { data } = await getTagList()
      this.tags = data.tags
    }
  }
}
</script>

<style scoped>
</style>
