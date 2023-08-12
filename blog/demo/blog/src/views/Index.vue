<template>
  <div>
    <h1>博客列表</h1>
    <ul>
      <li v-for="blog in blogs" :key="blog.id">{{ blog.title }}</li>
    </ul>
  </div>
</template>

<script>
// import {getBlogs} from '../config/API';
export default{
  data(){
    return{
      blogs:[]
    }
  },
  components:{

  },
  mounted(){
    this.fetchArticles()
  },
  methods:{
    async fetchArticles() {
      try {
        const response = await fetch(`http://localhost:3000/api/getArticles`);
        const data = await response.json();
        this.blogs = data;
      } catch (error) {
      console.error('获取博客列表失败', error);
      }
    }
  }
}
</script>

<style lang="less">
</style>