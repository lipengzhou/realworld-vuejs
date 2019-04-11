import request from '@/utils/request'

/**
 * 获取标签列表
 * https://github.com/gothinkster/realworld/tree/master/api#get-tags
 */
export const getTagList = () => request({
  method: 'GET',
  url: '/tags'
})
