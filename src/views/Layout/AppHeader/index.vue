<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <a class="navbar-brand" href="#/">conduit</a>
      <ul class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <router-link class="nav-link" to="/" exact>Home</router-link>
        </li>
        <template v-if="user">
          <li class="nav-item">
            <router-link class="nav-link" to="/editor">
              <i class="ion-compose"></i>&nbsp;New Post
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/settings">
              <i class="ion-gear-a"></i>&nbsp;Settings
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/profile/lpz">lpz</router-link>
          </li>
        </template>
        <template v-else>
          <li class="nav-item">
            <router-link class="nav-link" to="/register">Sign up</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/login">Sign in</router-link>
          </li>
        </template>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'AppHeader',
  data () {
    return {}
  },
  computed: {
    ...mapState(['user'])
  }
}
</script>

<style>
</style>
