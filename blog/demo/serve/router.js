let express =require("express")
const router=express.Router()
const api=require("./API")

router.get("./getBlogs",(req,res,next)=>{
  api.getBlogs(req.query.param,res,next)
})
