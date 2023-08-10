const mysql=require("mysql")

// 创建数据库连接池
const pool=mysql.createPool({
  host:"localhost",
  user:"root",
  password:"1234",
  database:"test",
  port:"3306",
  // 多语句查询
  multipleStatements: true,
})

// 导出数据库连接池对象
module.exports=pool;