<script>
export default {
  computed: {
    showNavbar() {
      return this.$route.meta.showNavbar
    }
  }
}
</script>

<template>
  <header>
    <div class="wrapper" v-if="showNavbar">
      <nav>
        <ul class="navbar">
          <li><RouterLink to="/">首頁</RouterLink></li>
          <li><RouterLink to="/products">產品頁</RouterLink></li>
          <li>
            <RouterLink to="/validate">VeeValidate-表單練習</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  list-style-type: none;
  font-size: 1.2rem;
  margin-bottom: 5rem;
}
a {
  font-weight: bold;
  padding: 12px;
  border-radius: 12px;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.router-link-exact-active {
  background-color: rgb(220, 231, 240);
}
</style>
