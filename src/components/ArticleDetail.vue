<template>
  <div class="article-detail" v-if="article">
    <div class="article-header">
      <h1>{{ article.title }}</h1>
      <p class="date">{{ article.date }}</p>
    </div>
    <div class="article-content">
      <pre>{{ article.content }}</pre>
    </div>
    <div class="actions">
      <button @click="goBack">back mainpage</button>
    </div>
  </div>
  <div v-else class="not-found">
    <h2>404 NO found</h2>
    <button @click="goBack">back mainpage</button>
  </div>
</template>

<script>
import articles from '../data/articles'

export default {
  name: 'ArticleDetail',
  data() {
    return {
      article: null
    }
  },
  created() {
    const id = parseInt(this.$route.params.id)
    this.article = articles.find(article => article.id === id)
  },
  methods: {
    goBack() {
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>

<style scoped>
.article-detail {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.article-header {
  margin-bottom: 30px;
}

.date {
  color: #999;
  font-size: 0.9em;
}

.article-content {
  line-height: 1.6;
  white-space: pre-wrap;
}

pre {
  font-family: inherit;
  white-space: pre-wrap;
}

.actions {
  margin-top: 30px;
}

button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
}

.not-found {
  text-align: center;
  padding: 50px;
}
</style>