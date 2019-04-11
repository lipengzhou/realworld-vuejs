import router from './router/'
import store from './store'
import { getToken, removeToken } from './utils/auth'
import { getUser } from './api/user'
import { SET_USER } from './store/mutation-types'
import nprogress from 'nprogress'

router.beforeEach(async (to, from, next) => {
  nprogress.start()

  const token = getToken()

  // 校验需要登录的页面访问权限
  if (to.meta.requiresAuth && !token) {
    nprogress.done()
    return next({
      name: 'login'
    })
  }

  if (!token) {
    nprogress.done()
    return next()
  }

  // 根据 token 获取用户信息
  try {
    const { data } = await getUser()
    store.commit(SET_USER, data.user)
    next()
  } catch (err) {
    removeToken()
    next()
  }

  nprogress.done()
})
