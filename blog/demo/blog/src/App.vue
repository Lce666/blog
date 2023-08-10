<template>
  <div>
    <el-container>
      <el-header>
        <Home></Home>
      </el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>
          <articleList/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Home from './views/Home.vue';
import articleList from './components/articleList.vue';
export default {
  name: 'App',
  components: {
    Home,articleList
  },
  methods:{
    
  }
}
</script>

<style lang="less">
/* .el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
} */

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 800px;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>
