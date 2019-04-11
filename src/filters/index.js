import dayjs from 'dayjs'
import marked from 'marked'

export default {
  install (Vue) {
    Vue.filter('formatDate', (value, format = 'MMMM D, YYYY') => {
      return dayjs(value).format(format)
    })

    Vue.filter('formatMd', (value) => {
      return marked(value)
    })
  }
}
