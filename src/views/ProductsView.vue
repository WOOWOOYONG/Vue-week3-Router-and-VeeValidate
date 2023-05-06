<template>
  <h1>產品頁面</h1>
  <ul class="productList">
    <li v-for="item in productInfo" :key="item.id">
      <!-- <RouterLink :to="`/product/${item.id}?name=${item.name}&about=${item.about}`">{{
        item.name
      }}</RouterLink> -->
      <RouterLink
        :to="{
          path: `/product/${item.id}`,
          query: {
            name: item.name,
            about: item.about
          }
        }"
        >{{ item.name }}</RouterLink
      >
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      productInfo: [
        {
          id: 1,
          name: 'book1',
          about: 'test about1'
        },
        {
          id: 2,
          name: 'book2',
          about: 'test about2'
        },
        {
          id: 3,
          name: 'book3',
          about: 'test about3'
        }
      ]
    }
  }
}
</script>

<style scoped>
.productList {
  list-style-type: none;
  margin-top: 2rem;
  font-size: 1.5rem;
  display: flex;
  gap: 1rem;
}
</style>
