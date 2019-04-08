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
