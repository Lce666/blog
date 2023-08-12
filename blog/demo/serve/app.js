const express=require("express");
const cors=require("cors");
const app=express();
const router=require("./router")
// 允许跨域请求
app.use(cors())

app.use('/api',router)

app.listen(3000, () => {
  console.log("服务端正运行在3000端口");
});