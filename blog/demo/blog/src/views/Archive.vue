<template>
  <el-container>
  <el-aside width="200px">
    <span>文章列表</span>
  </el-aside>
  <el-main>
    <!-- 文章标题按照时间顺序，并且以一个月为单位展示 -->
    <div class="month" v-for="archive in archivedArticles" :key="archive.date">
      <h2>{{ archive.date }}</h2>
      <!-- 在每个月份的文章列表中循环遍历文章 -->
      <div class="article" v-for="article in archive.articles" :key="article.id">
        <div class="title" >{{ article.title }}</div>
        <div class="like">{{ article.like }}</div>
      </div>
    </div>
  </el-main>
</el-container>
</template>

<script>
export default{
  data(){
    return {
      Articles:[],
    }
  },
  computed:{
    archivedArticles(){
      const archived={}
      this.Articles.forEach(article=>{
        const date = new Date(article.create_time);
        const year = date.getFullYear();
        const month = date.getMonth() + 1; // 注意月份从0开始，所以要加1

        // 创建一个标识月份的字符串，如 "2023-08"
        const formattedDate = `${year}-${month.toString().padStart(2, '0')}`;

        if (!archived[formattedDate]) {
          archived[formattedDate] = {
            date: formattedDate,
            articles: [],
          };
        }
        archived[formattedDate].articles.push(article);
      })
      console.log(archived+"archived");
      return Object.values(archived);
    },
  },
  methods:{
    async fetchArticles() {
      try {
        const response = await fetch(`http://localhost:3000/api/getArticles`);
        const data = await response.json();
        this.Articles = data;
        console.log(this.Articles);
      } catch (error) {
      console.error('获取博客列表失败', error);
      }
    },
  },
  async mounted(){
    await this.fetchArticles()
  },
  
}
</script>

<style>
.article{
  height: 15px;
}

</style>