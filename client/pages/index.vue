<template>
  <div class="container">
    <div>
      <Logo />
      <h2 class="subtitle">
        MEVN starter template based on Nuxt-js
      </h2>
      <div class="links">
        <a
          href="https://mevn.madlabs.xyz"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/madlabsinc/mevn-cli"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
        <a @click="handleLogout" rel="noopener noreferrer" class="button--grey">
          Logout
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$auth)
  },
  methods: {
    handleLogout() {
      this.$auth.logout()
      this.$router.push('/login')
    },
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
