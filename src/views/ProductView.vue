<template>
  <h1 class="mb-5">產品內頁</h1>
  <div class="text-center">
    <h2>{{ $route.query.name }}</h2>
    <div class="mb-5">
      <img :src="$route.query.image" alt="photo" class="img-fluid" />
    </div>
    <p>{{ $route.query.about }}</p>
  </div>
  <button @click="$router.push({ name: 'products' })" class="btn btn-light">回到產品列表</button>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route)
  }
}
</script>

<style scoped>
img {
  width: 300px;
}
p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  text-align: left;
  max-width: 80%;
  margin: 0 auto 24px auto;
}
</style>
