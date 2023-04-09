<template>
  <div class="post-card">
    <div class="post-card__image">
      <img :src="post.articleImage" :alt="post.title" />
    </div>
    <div class="post-card__description">
      <div>
        <p class="post-card__title">
          {{
            post.title.length > 50
              ? post.title.substr(0, 50) + "..."
              : post.title
          }}
        </p>
        <p class="post-card__text">
          {{
            post.text.length > 100
              ? post.text.substr(0, 100) + "..."
              : post.text
          }}
        </p>
      </div>

      <router-link
        class="post-card__link"
        :to="{ name: 'PostPage', params: { id: post.id } }"
        >Читать далее</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ["post"]
};
</script>

<style scoped>
.post-card {
  width: 100%;
  display: flex;
  margin: 0 5px 10px 5px;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.1);
}

.post-card:first-child {
  margin-top: 10px;
}

.post-card__image img {
  width: 80px;
  height: 80px;
  border-radius: 4px;
  margin-right: 10px;
  object-fit: cover;
}

.post-card__description {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.post-card__title {
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 5px;
}

.post-card__link {
  display: inline-flex;
  width: fit-content;
  margin-top: 10px;
  text-decoration: none;
  color: #f2f0ff;
  font-size: 0.9rem;
  padding: 5px;
  background-color: darkcyan;
  border-radius: 4px;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.1);
}
</style>
