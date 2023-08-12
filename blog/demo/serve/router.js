let express =require("express")
const router=express.Router()
const dbUtils=require("./dbUtil")
const sqlList=require('./sqlOperation')

router.get("/getArticles",(req,res)=>{
  dbUtils.executeQuery(sqlList.article.getArticles,res,"获取文章列表失败")
})
router.get("/getArticleDetail",(req,res)=>{
  dbUtils.executeQuery(sqlList.article.getArticleDetail,res,"获取文章失败",req.query.id)
})
router.get("/getComment",(req,res)=>{
  dbUtils.executeQuery(sqlList.article.getComments,res,"获取评论失败",req.query.blog_id)
})


module.exports=router
