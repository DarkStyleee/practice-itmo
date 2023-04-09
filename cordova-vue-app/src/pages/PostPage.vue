<template>
  <div class="base-wrapper">
    <header-component :pageName="getSplitTitle"></header-component>
    <div class="full-post">
      <div class="full-post__header">
        <p>{{ article.title }}</p>
      </div>

      <div class="full-post__image">
        <img :src="article.articleImage" :alt="article.title" />
      </div>

      <div class="full-post__text">
        <p>{{ article.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { getArticlesById } from "@/API/articles.js";
import HeaderComponent from "@/components/HeaderComponent";

export default {
  components: {
    HeaderComponent
  },
  data() {
    return {
      article: {}
    };
  },
  computed: {
    getSplitTitle() {
      let splitedText = String(this.article.title);
      if (splitedText.length > 25) {
        splitedText = this.article.title.substr(0, 25) + "...";
      }
      return splitedText;
    }
  },
  created() {
    if (!Object.keys(this.article).length) {
      getArticlesById(this.$route.params.id)
        .then(async article => {
          const response = await article.json();
          this.article = response;
        })
        .catch(err => console.log("Не удалось получить статью!"));
    }
  }
};
</script>

<style scoped>
.full-post {
  display: flex;
  flex-direction: column;
  padding: 5px;
}

.full-post__header {
  font-size: 1.2rem;
  font-weight: bold;
}

.full-post__image {
  margin-bottom: 10px;
}

.full-post__image img {
  width: 100%;
  height: 200px;
  object-fit: none;
  border-radius: 4px;
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.2);
}
</style>
