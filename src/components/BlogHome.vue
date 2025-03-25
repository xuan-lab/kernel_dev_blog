<template>
  <div class="blog-home">
    <h1>KERNEL DEV BLOG</h1>
    <div class="articles-list">
      <div 
        v-for="article in articles" 
        :key="article.id" 
        class="article-item"
        @click="goToArticle(article.id)"
      >
        <h2>{{ article.title }}</h2>
        <p class="date">{{ article.date }}</p>
        <p class="preview">{{ getPreview(article.content) }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import articles from '../data/articles'

export default {
  name: 'BlogHome',
  data() {
    return {
      articles
    }
  },
  methods: {
    getPreview(content) {
      return content.substring(0, 100) + (content.length > 100 ? '...' : '')
    },
    goToArticle(id) {
      this.$router.push({ name: 'Article', params: { id } })
    }
  }
}
</script>

<style scoped>
.blog-home {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.articles-list {
  margin-top: 20px;
}

.article-item {
  margin-bottom: 30px;
  padding: 15px;
  border: 1px solid #eee;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;
}

.article-item:hover {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.date {
  color: #999;
  font-size: 0.9em;
}

.preview {
  margin-top: 10px;
  color: #333;
}
</style>