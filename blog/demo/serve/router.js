let express =require("express")
const router=express.Router()
const dbUtils=require("./dbUtil")
const sqlList=require('./sqlOperation')

// 获取文章列表，没有查询参数
router.get("/getArticles",(req,res)=>{
  dbUtils.executeQuery(sqlList.article.getArticles,res,"获取文章列表失败")
})
// 获取某篇文章的详情，查询参数：id
router.get("/getArticleDetail",(req,res)=>{
  dbUtils.executeQuery(sqlList.article.getArticleDetail,res,"获取文章失败",req.query.id)
})
// 获取某篇文章的评论，查询参数：blog_id
router.get("/getComment",(req,res)=>{
  dbUtils.executeQuery(sqlList.article.getComments,res,"获取评论失败",req.query.blog_id)
})
// 指定某篇文章，查询参数：is_top，id
router.put("/topArticle",(req,res)=>{
  dbUtils.executeQuery(sqlList.article.topArticle,res,"置顶文章失败",req.query.is_top,req.query.id)
})
// 删除某篇文章
router.delete("/delArticle",(req,res)=>{
  dbUtils.executeQuery(sqlList.article.delArticle,res,"删除文章失败",req.query.id)
})
// 添加评论
router.put("/addComment",(req,res)=>{
  dbUtils.executeQuery(sqlList.article.addComment,res,"添加评论失败",req.query.username,req.query.content,req.query.blog_id)
})

module.exports=router
