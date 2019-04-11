import request from '@/utils/request'

/**
 * 获取评论列表
 */
export const getComments = slug => request({
  method: 'GET',
  url: `/articles/${slug}/comments`
})

/**
 * 创建评论
 */
export const createComment = (slug, body) => request({
  method: 'POST',
  url: `/articles/${slug}/comments`,
  requireAuth: true,
  data: {
    comment: {
      body
    }
  }
})

/**
 * 删除评论
 */
export const deleteComment = (slug, commentId) => request({
  method: 'DELETE',
  url: `/articles/${slug}/comments/${commentId}`,
  requireAuth: true
})
