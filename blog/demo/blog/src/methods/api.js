import axios from "axios"

export async function updateTopArticle(is_top,id){
  const url="http://localhost:3000/api/topArticle"
  try{
    const response=await axios.put(url,null,{
      params:{
        is_top,id
      }
    })
    if(response.status===200){
      console.log("文章置顶状态更新成功");
    }else{
      console.error("文章置顶状态更新失败");
    }
  }catch(error){
    console.error('请求失败',error);
    throw error;
  }
}

export async function getArticles(){
  
}
