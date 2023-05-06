<template>
  <h1>產品內頁</h1>
  <div>
    <h2>{{ $route.query.name }}</h2>
    <p>{{ $route.query.about }}</p>
  </div>
  <button @click="$router.push({ name: 'products' })">回到產品列表</button>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route)
  }
}
</script>
