import request from '@/utils/request'

/**
 * 获取所有文章列表
 * https://github.com/gothinkster/realworld/tree/master/api#list-articles
 */
export const getArticleList = ({
  page = 1,
  pageSize = 10,
  tag = '',
  author = '',
  favorited = ''
} = {}) => {
  const offset = (page - 1) * pageSize
  return request({
    method: 'GET',
    url: '/articles',
    params: {
      offset,
      limit: pageSize,
      favorited,
      author,
      tag
    }
  })
}

/**
 * 获取用户关注列表
 * https://github.com/gothinkster/realworld/tree/master/api#feed-articles
 */
export const getFeedArticleList = ({
  page = 1,
  pageSize = 10
} = {}) => {
  const offset = (page - 1) * pageSize
  return request({
    method: 'GET',
    url: '/articles/feed',
    requireAuth: true,
    params: {
      offset,
      limit: pageSize
    }
  })
}

/**
 * 获取文章详情
 */
export const getArticle = slug => request({
  method: 'GET',
  url: `/articles/${slug}`,
  requireAuth: true
})

/**
 * 创建文章
 */
export const createArticle = ({
  title,
  description,
  body,
  tagList
}) => request({
  method: 'POST',
  url: '/articles',
  requireAuth: true,
  data: {
    article: {
      title,
      description,
      body,
      tagList
    }
  }
})

/**
 * 更新文章
 * https://github.com/gothinkster/realworld/tree/master/api#update-article
 * 注意：当标题改变时，slug 也会更新
 */
export const updateArticle = (slug, {
  title,
  description,
  body
}) => request({
  method: 'PUT',
  url: `/articles/${slug}`,
  requireAuth: true,
  data: {
    article: {
      title,
      description,
      body
    }
  }
})

/**
 * 删除文章
 * https://github.com/gothinkster/realworld/tree/master/api#delete-article
 */
export const deleteArticle = slug => request({
  method: 'DELETE',
  url: `/articles/${slug}`,
  requireAuth: true
})

/**
 * 文章点赞
 */
export const favoriteArticle = slug => request({
  method: 'POST',
  url: `/articles/${slug}/favorite`,
  requireAuth: true
})

/**
 * 取消文章点赞
 */
export const unFavoriteArticle = slug => request({
  method: 'DELETE',
  url: `/articles/${slug}/favorite`,
  requireAuth: true
})
