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
            about: item.about,
            image: item.image
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
          image: 'https://i.pinimg.com/originals/bf/3c/f2/bf3cf230331995da8ee6d568e3289dce.jpg',
          about:
            '《H2》是安達充創作的日本漫畫。g故事以日本高中棒球為題材，圍繞著二男二女，四個主人公之間的友情和愛情而展開的故事。'
        },
        {
          id: 2,
          name: 'book2',
          image: 'https://i.pinimg.com/564x/38/23/b9/3823b9bb1c93435b44a33e35d64b6f2b.jpg',
          about:
            '為爵士樂感到心潮澎湃的高三生──宮本大，獨自在河濱吹著薩克斯風。哪怕颳風下雨還是烈日高照，好幾年來不論日夜都沒停歇。「我要成為世界第一的爵士樂手…!!」故事在仙台的廣瀨川揭開序幕──────'
        },
        {
          id: 3,
          name: 'book3',
          image: 'https://m.media-amazon.com/images/I/71viSYlr-oL.jpg',
          about:
            '《銀之匙 Silver Spoon》是以北海道的農業高中為舞台的校園漫畫作品。靈感源自出生於北海道酪農業家庭，同時也是畢業於農業高中的作者的大量的親身體驗。廣告標語為「沾滿了汗水、眼淚和泥土的青春故事。」'
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
