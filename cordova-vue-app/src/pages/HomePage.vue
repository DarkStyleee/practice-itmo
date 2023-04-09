<template>
  <div class="base-wrapper">
    <header-component pageName="Новости"></header-component>
    <div class="home">
      <div class="news-list">
        <post-component
          v-for="article in articles"
          :key="article.id"
          :post="article"
        ></post-component>
      </div>
    </div>
  </div>
</template>

<script>
import PostComponent from "@/components/PostComponent";
import HeaderComponent from "@/components/HeaderComponent";

import { getArticles } from "@/API/articles.js";

export default {
  components: {
    PostComponent,
    HeaderComponent
  },
  data() {
    return {
      articles: []
    };
  },
  created() {
    if (this.articles.length === 0) {
      getArticles()
        .then(async articles => {
          const response = await articles.json();
          this.articles = [...response];
        })
        .catch(err => console.log("Не удалось получить статьи!"));
    }
  }
};
</script>

<style scoped>
.news-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
