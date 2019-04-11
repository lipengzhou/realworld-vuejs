<template>
  <div class="article-meta">
    <a href=""><img :src="article.author.image" /></a>
    <div class="info">
      <a href="" class="author">{{ article.author.username }}</a>
      <span class="date">{{ article.createdAt | formatDate }}</span>
    </div>
    <!--
      btn-secondary 已关注
      btn-outline-secondary 未关注
     -->
    <button
      class="btn btn-sm"
      :class="{
        'btn-outline-secondary': !article.author.following,
        'btn-secondary': article.author.following
      }"
      @click="$emit('following', article.author.username, !article.author.following)">
      <i class="ion-plus-round"></i>
      &nbsp;
      {{ article.author.following ? 'UnFollow' : 'Follow' }} {{ article.author.username }} <!-- <span class="counter">(10)</span> -->
    </button>
    &nbsp;&nbsp;
    <button class="btn btn-sm btn-outline-primary">
      <i class="ion-heart"></i>
      &nbsp;
      Favorite Post <span class="counter">({{ article.favoritesCount }})</span>
    </button>
    &nbsp;&nbsp;
    <template v-if="article.author.username === $store.state.user.username">
      <button class="btn btn-outline-secondary btn-sm">
        <i class="ion-edit"></i> Edit Article
      </button>
      &nbsp;&nbsp;
      <button class="btn btn-outline-danger btn-sm">
        <i class="ion-trash-a"></i> Delete Article
      </button>
    </template>
  </div>
</template>

<script>
export default {
  name: 'ArticleMeta',
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
</style>
