const pool=require("./databaseConfig")
const sqlList=require("./sqlOperation")

// 数据库查询的抽象函数
function executeQuery(query,res,errorMessage,...queryParamsters){
  pool.getConnection((err,connection)=>{
    if(err){
      res.status(500).json({err:'数据库链接失败'})
      return
    }
    // 数据库查询部分
    connection.query(query,[...queryParamsters],(err,result)=>{
      if(err){
        // console.error("Database query error:", err);
        res.status(500).json({error:errorMessage})
      }else{
        // console.log("Query result:", result);
        // 以JSON字符串的形式向前端发送数据
        res.json(result)
      }
      connection.release()
    })
  })
}


module.exports={executeQuery}