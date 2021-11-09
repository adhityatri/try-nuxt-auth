<template>
  <div class="login-wrapper">
    <h1>Login Form</h1>
    <form class="form-wrapper" @submit.prevent="handleLogin">
      <div class="field">
        <h4>Username</h4>
        <input v-model="form.name" type="text" />
      </div>
      <div class="field">
        <h4>Password</h4>
        <input v-model="form.password" type="password" />
      </div>
      <div class="field-action">
        <button type="submit">Log in</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  auth: false,
  data() {
    return {
      form: {
        name: null,
        password: null,
      },
    }
  },
  mounted() {
    if (this.$auth.loggedIn) {
      this.$router.push('/')
    }
  },
  methods: {
    async handleLogin() {
      try {
        await this.$auth
          .loginWith('local', {
            data: this.form,
          })
          .then((res) => {
            console.log(res)
            const user = res.config.data
            this.$auth.setUser(user)
            this.$auth.$storage.setUniversal('user', user, true)
            this.$router.push('/')
          })
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>

<style>
.login-wrapper {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.form-wrapper {
  margin-top: 12px;
  padding: 12px;
  border: 1px dashed red;
}

.field {
  margin-bottom: 12px;
}
</style>
