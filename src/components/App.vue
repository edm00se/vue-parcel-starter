<template>
  <div class="wrapper">
    <div class="content">
      <h1 v-html="title"></h1>
      <h2 v-html="subtitle"></h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      title: 'Hello <a href="https://parceljs.org/">Parcel</a> 📦 🚀',
      subtitle: 'from <a href="https://vuejs.org/">vue.js</a>!'
    };
  }
};
</script>

<style lang="scss">
html,
body {
  height: 100%;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
}

.wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.content {
  text-align: center;
}

h1 {
  font-weight: 300;
}

h2 {
  font-weight: 500;
}

a {
  color: #42b983;
}
</style>
