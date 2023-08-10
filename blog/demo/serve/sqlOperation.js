let sqlList={
  article:{
    // 获取所有文章
    getArticles:"select title,id,is_top,(select count(1) from comment where id=comment.blog_id) as commentNum,create_time,`like` from article order by is_top desc,create_time desc",
    // 置顶文章
    topArticle:"update article set is_top=? where id=?",
    // 删除文章
    delArticle:"delete from article where id=? and user_id=?",
    // 获取所有评论
    getComments:"select id,username,content,create_time from comment where blog_id=?",
    // 添加评论
    addComment:"insert into comment set ?"
  },
  user:{
    login:"select count(1) as count from user where username=? and password=? ",
    changePassword:"update user set password=? where username=? and password=?"
  }
};
module.exports=sqlList;