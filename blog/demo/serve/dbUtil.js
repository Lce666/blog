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

// async function executeQuery(query, queryParameters) {
//   const connection = await pool.getConnection();
//   try {
//     const [rows] = await connection.query(query, queryParameters);
//     return rows;
//   } catch (error) {
//     throw error;
//   } finally {
//     connection.release();
//   }
// }
// async function executeQuery(query, queryParameters) {
//   const connection = await new Promise((resolve, reject) => {
//     pool.getConnection((err, conn) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(conn);
//       }
//     });
//   });

//   try {
//     const [rows] = await connection.query(query, queryParameters);
//     return rows;
//   } catch (error) {
//     throw error;
//   } finally {
//     connection.release();
//   }
// }

    
// // 处理查询请求
// async function handleQuery(req,res){
//   try{
//     const queryName=req.query.queryName
//     const queryParamsters=req.query.queryParamsters||[]

//     // 根据queryName获取查询语句
//     const query=sqlList[queryName]
//     if(!query){
//       res.status(400).json({error:"无效的查询名"})
//       return queryName
//     }

//     // 执行查询
//     const result=await executeQuery(query,queryParamsters)
//     res.json(result)
//   }catch(error){
//     res.status(500).json({error:'服务器连接错误'})
//   }
// }

module.exports={executeQuery}