
const pool=require('./databaseConfig')
const sqlMap=require('./sqlOperation')

pool.getConnection((err,connection)=>{
  if(err){
    console.log("数据库连接失败");
    console.log(err);
  }else{
    console.log("数据库连接成功");
    connection.query(sqlMap.article.getComment,[1],(err,result)=>{
      if(err){
        console.log("获取博客列表失败");
        console.log(err);
      }else{
        console.log(result);
      }
    })
    connection.release();
  }
});