
<template lang="html">
  <div id="app">
    <h1>{{ msg }}</h1>
    <h2>from vue.js!</h2>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      msg: 'Hello Parcel 📦 🚀'
    };
  }
}
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

  #app {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  h1 {
    font-weight: 300;
  }
</style>
