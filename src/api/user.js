import request from '@/utils/request'

/**
 * 用户登录
 * @param  {String} options.email    邮箱
 * @param  {String} options.password 密码
 * @return {Object}                  响应结果
 */
export const login = ({ email, password }) => request({
  method: 'POST',
  url: '/users/login',
  data: {
    user: {
      email,
      password
    }
  }
})

/**
 * 用户注册
 * @param  {String} options.username 用户名
 * @param  {String} options.email    邮箱
 * @param  {String} options.password 密码
 * @return {Object}                  响应结果
 */
export const register = ({ username, email, password }) => request({
  method: 'POST',
  url: '/users',
  data: {
    user: {
      username,
      email,
      password
    }
  }
})

/**
 * 根据 token 获取用户信息
 * @return {Object} 响应对象
 */
export const getUser = () => request({
  method: 'GET',
  url: '/user',
  requireAuth: true
})

/**
 * 更新用户
 */
export const updateUser = ({
  email,
  username,
  password,
  image,
  bio
}) => request({
  method: 'PUT',
  url: '/user',
  requireAuth: true,
  data: {
    email,
    username,
    password,
    image,
    bio
  }
})

/**
 * 获取用户基本信息
 */
export const getUserProfile = username => request({
  method: 'GET',
  url: `/profiles/${username}`
})

/**
 * 关注用户
 */
export const followUser = username => request({
  method: 'POST',
  url: `/profiles/${username}/follow`,
  requireAuth: true
})

/**
 * 取消关注用户
 */
export const unFollowUser = username => request({
  method: 'DELETE',
  url: `/profiles/${username}/follow`,
  requireAuth: true
})
