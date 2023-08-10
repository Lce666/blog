const pool=require("./databaseConfig")
const express=require("express")
const app=express()
const sqlMap=require('./sqlOperation')

module.exports={
  // 获取博客列表
  getBlogs(data,res,next){
    pool.getConnection((err,connection)=>{
      if(err){
        console.log("数据库连接失败");
      }else{
        console.log("数据库连接成功");
        connection.query(sqlMap.article.getBlogs,(err,result)=>{
          if(err){
            console.log("获取博客列表失败");
          }else{
            console.log(result);
            connection.release();
          }
        })
      }
    })
  },
}

  
    

