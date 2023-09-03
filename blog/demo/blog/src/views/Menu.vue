<template>
  <div>
    <!-- 导航栏 -->
    <el-menu id="header" :default-active="activeIndex" class="header-container" mode="horizontal" @select="handleSelect" router>
      <el-menu-item index="/index">首页</el-menu-item>
      <el-menu-item index="/archive">归档</el-menu-item>
      <el-menu-item index="/info">个人信息</el-menu-item>
      <el-menu-item index="/login">登陆/注册</el-menu-item>
      <!-- github默认在新标签页打开 -->
      <!-- <el-menu-item index="2-5"><a href="https://github.com/Lce666" target="_blank">GitHub</a></el-menu-item> -->
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '/',
      lastScrollTop: 0
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
    Scroll() {
      // 获取当前滚动距离
      let scrollTop = window.pageYOffset
      const header = document.getElementById('header')
      // 获取已滚动距离，并更新上一次滚动条到顶部的距离
      let scrollDis = scrollTop - this.lastScrollTop
      this.lastScrollTop = scrollTop

      // 向下滚动时隐藏导航栏
      if (scrollDis > 0) {
        if(!header.classList.contains('.noTop')){
          header.classList.add('noTop')
        }
      }else{
          header.classList.remove('noTop')
      }
    },
  },
  // 给生命周期函数添加监听事件
  mounted() {
    window.addEventListener('scroll',this.Scroll)
  },
  // 销毁组件前移除监听事件，防止内存泄漏
  beforeDestroy() {
    window.removeEventListener('scroll',this.Scroll,false)
  },
}
</script>

<style lang="less">
  .header-container {
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1999;
    // backdrop-filter: blur(4px);
    background-color: rgba(0, 0, 0, 0.2);
    transition: all 0.7s ease;
    // border-bottom: solid 0 #dfdede;
    &.noTop {
      // 向上平移，来实现隐藏功能
      transform: translate(0, -100%);
    }
    a {
      text-decoration: none;
      color: #fffdfd;
    }
    .el-menu-item {
      font-size: 20px;
      color: #ffffff;
      font-weight: 600;
      &:hover {
        background-color: rgba(221, 219, 219, 0.1);
        color: rgb(242, 186, 205);
      }
    }
  }

  .el-menu-item.is-active {
    // border-bottom: 2px solid rgb(237, 176, 196);
    // border-top: 2px solid rgb(231, 175, 193);
    font-weight: 600;
    background-color: rgba(231, 230, 230, 0.1);
  }

.el-container {
  width: 1000px;
  margin: auto;
}
</style>
