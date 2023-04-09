<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 14px;
  line-height: 1.3;
  letter-spacing: 0.3;
}

.base-wrapper {
  display: flex;
  flex-direction: column;
}
</style>
