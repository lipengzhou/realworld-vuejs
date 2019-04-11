<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign up</h1>
          <p class="text-xs-center">
            <a href="">Have an account?</a>
          </p>

          <ul class="error-messages">
            <template v-for="(value, key) in errors">
              <li v-for="(err, index) in value" :key="index">{{ `${key} ${err}` }}</li>
            </template>
          </ul>

          <form @submit.prevent="onRegister(user)">
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder="Your Name"
                :disabled="disabled"
                v-model="user.username">
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder="Email"
                :disabled="disabled"
                v-model="user.email">
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="password"
                placeholder="Password"
                :disabled="disabled"
                v-model="user.password">
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right" :disabled="disabled">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { register } from '@/api/user'
import { SET_USER } from '@/store/mutation-types'

export default {
  name: 'AppRegister',
  data () {
    return {
      user: {
        username: '',
        email: '',
        password: ''
      },
      disabled: false,
      errors: null
    }
  },
  methods: {
    async onRegister ({ username, email, password }) {
      this.disabled = true
      try {
        const { data } = await register({ username, email, password })
        this.$store.commit(SET_USER, data.user)
        this.$router.push({ name: 'home' })
      } catch ({ response }) {
        this.errors = response.data.errors
      }
      this.disabled = false
    }
  }
}
</script>

<style scoped>
</style>
