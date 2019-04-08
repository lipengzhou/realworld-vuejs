<template>
  <div>
    <AppHeader/>
    <router-view/>
    <AppFooter/>
  </div>
</template>

<script>
import AppHeader from './AppHeader/'
import AppFooter from './AppFooter/'

export default {
  name: 'AppLayout',
  components: {
    AppHeader,
    AppFooter
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
</style>
