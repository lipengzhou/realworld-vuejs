const TOKEN_KEY = 'token'
const storage = window.localStorage

export const getToken = () => {
  return storage.getItem(TOKEN_KEY)
}

export const setToken = token => {
  return storage.setItem(TOKEN_KEY, token)
}

export const removeToken = () => {
  return storage.removeItem(TOKEN_KEY)
}
