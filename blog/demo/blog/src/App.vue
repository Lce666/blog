<template>    <div class="show">
    <el-container>
      <el-header>
        <Menu index="/"></Menu>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
    
  </div>

</template>

<script>
import Menu from './views/Menu.vue';
import articleList from './components/articleList.vue';
import Index from './views/Index.vue';
import Archive from './views/Archive.vue';

export default {
  name: 'App',
  components: {
    Menu,articleList,Index,Archive
  },
  methods:{
    
  }
}
</script>

<style lang="less">
*{
  margin: 0;
  padding: 0;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  width: 1100px;
  height: 950px;
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 8px;
  padding: 0;
}

body > .el-container {
  margin-bottom: 400px;
}


</style>
