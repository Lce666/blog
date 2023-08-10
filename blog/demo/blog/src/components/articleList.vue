<template>
  <div class="articleList">
    <el-card class="article">
      <div slot="header" class="">
        <span>卡片名称</span>
      </div>
      <div v-for="o in 1" :key="o" class="">
        {{'列表内容 ' + o }}
      </div>
      <el-button style="float: right; padding:  0;font-size:20px" type="text">阅读全文</el-button>
    </el-card>
  </div>
</template>

<script>
export default {

}
</script>

<style>
 .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .article {
    width: 760px;
    height: 300px;
  }
</style>