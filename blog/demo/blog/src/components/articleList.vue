<template>
  <div class="articleList">
    <!-- 分页组件 -->
    <div class="article" v-for="article in articles" :key="article.id">
      <div class="article_title">{{ article.title }}</div>
      <div class="info">
        <span class="time">{{ format(article.create_time) }}</span>
        <span class="like">点赞数：{{ article.like }}</span>
        <br />
        <span @click="topArticle(article.is_top, article.id)">{{ article.is_top == 1 ? '取消置顶' : '置顶' }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { updateTopArticle } from '../methods/api.js'
import {formatDate} from '../uitl/dateFormat.js';

export default {
  props: {
    // 接收父组件传递来的参数，并指定类型和默认的值
    allArticle: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  // 定义一个监听器，当allArticle产生变化则初始化数据
  watch: {
    allArticle() {
      this.init()
    }
  },
  data() {
    return {
      articles: [],
      pageSize: 5,
      currentPage: 1,
      ArtNum: 0
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    // 文章数据初始化
    init() {
      // 将本地存储的页数赋给当前页数，若本地存储中不存在NowPage则不操作
      let NowPage = localStorage.getItem('NowPage')
      NowPage != undefined ? (this.currentPage = parseInt(NowPage)) : ''
      // 获取所有文章，
      const Articles = [...this.allArticle]
      // 获取文章列表长度
      this.ArtNum = Articles.length
      let currentPage = this.currentPage
      // 当页开始的文章index
      const start = (currentPage - 1) * this.pageSize
      // 获得当页展示的文章
      this.articles = Articles.splice(start, start + this.pageSize)
    },
    initPage() {
      const windowWidth = document.querySelector('app')
    },
    async topArticle(isTop, id) {
      if (confirm(isTop == 1 ? '确定取消置顶？' : '置顶该文章')) {
        try {
          console.log(id)
          await updateTopArticle(isTop ^ 1, id)
          this.$emit('refreshData')
        } catch (err) {
          console.log(err)
        }
      }
    },
    format(date){
      return formatDate(date)
    }
  }
}
</script>

<style lang="less" scoped>
* {
  padding: 0;
  margin: 0;
}
.article {
  line-height: 200%;
  height: 200px;
}
.info {
  height: 150px;
}
.article_title {
  align-content: center;
  height: 30px;
}
.articleList {
  height: 950px;
  width: 1100px;
}
</style>
