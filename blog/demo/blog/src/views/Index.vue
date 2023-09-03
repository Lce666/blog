<template>
  <div>
    <ArticleList :allArticle="allArticles" @refreshData="fetchArticles"></ArticleList>
    <el-backtop></el-backtop>
  </div>
</template>

<script>
import ArticleList from '../components/articleList.vue';
export default{
  data(){
    return{
      allArticles:[]
    }
  },
  components:{
    ArticleList
  },
  mounted(){
    this.fetchArticles()
  },
  methods:{
    async fetchArticles() {
      try {
        const response = await fetch(`http://localhost:3000/api/getArticles`);
        const data = await response.json();
        this.allArticles = data;
      } catch (error) {
      console.error('获取博客列表失败', error);
      }
    },
  }
}
</script>

<style lang="less">
</style>