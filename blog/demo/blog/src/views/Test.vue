<template>
  <div>
    <div>{{ article[0].title }}</div>
    <div>{{ article[0].id }}</div>
    <div>{{ article[0].context }}</div>
    <div>{{ article[0].is_top }}</div>
    <div>{{ article[0].create_time }}</div>
    <div>{{ article[0].like }}</div>
    <div>{{ article[0].user_id }}</div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        article:[],
        id:'2'
      }
    },
    mounted(){
      this.fetchArticleDetail()
    },
    methods:{
      async fetchArticleDetail(){
        try{
          const response=await fetch(`http://localhost:3000/api/getArticleDetail?id=${encodeURIComponent(2)}`)
          const data=await response.json()
          this.article=data
          console.log(this.article);
        }catch(error){
          console.error(error);
        }
      }
    }
  }
</script>