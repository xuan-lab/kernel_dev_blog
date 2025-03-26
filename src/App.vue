<template>
  <div id="app">
    <header>
      <h1 @click="$router.push('/')">KERNEL DEV BLOG</h1>
    </header>
    <router-view/>
    <footer>
      <p>© 2025 xiexuan build</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  color: #333;
  line-height: 1.6;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  background-color: #2c3e50;
  color: white;
  padding: 15px 20px;
  text-align: center;
}

header h1 {
  margin: 0;
  cursor: pointer;
}

footer {
  background-color: #f8f9fa;
  padding: 15px;
  text-align: center;
  margin-top: auto;
}
</style>
