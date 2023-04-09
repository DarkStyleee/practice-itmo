<template>
  <div class="header">
    <a @click="$router.go(-1)">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.7071 4.29289C12.0976 4.68342 12.0976 5.31658 11.7071 5.70711L6.41421 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H6.41421L11.7071 18.2929C12.0976 18.6834 12.0976 19.3166 11.7071 19.7071C11.3166 20.0976 10.6834 20.0976 10.2929 19.7071L3.29289 12.7071C3.10536 12.5196 3 12.2652 3 12C3 11.7348 3.10536 11.4804 3.29289 11.2929L10.2929 4.29289C10.6834 3.90237 11.3166 3.90237 11.7071 4.29289Z"
          fill="#000000"
        />
      </svg>
    </a>
    <p class="header__text">{{ pageName }}</p>
  </div>
</template>

<script>
export default {
  props: ["pageName"]
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e2e2e2;
  background-color: aliceblue;
  box-shadow: 0px 1px 1px 1px rgb(0 0 0 / 10%);
}

.header a {
  width: 50px;
  height: 30px;
  margin-left: 20px;
}

.header a svg {
  width: 30px;
  height: 30px;
}

.header__text {
  font-size: 1.2rem;
  font-weight: bold;
  margin-left: 10px;
}
</style>
