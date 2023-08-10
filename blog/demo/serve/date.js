// 判断是否闰年,能被4整除但不能被100整除，或被400整除皆为闰年
const isLeap=function(year){
  if((year%4==0&&year%100!=0)||(year%400==0))return true;
  else return false;
}

// 获取星期数
const getWeek=function(date){
  let day=new Date(date);
  let weekArr=["一","二","三","四","五","六","日"];
  return weekArr[day.getDay()];
}

// 获取月份天数
const getMonthDay=function(year,month){
  // 自然月是1-12,数组从0开始
  month=parseInt(month)-1;
  if(month<0||month>11)return "";
  let monthArr=[31,28,31,30,31,30,31,31,30,31,30,31];
  if(isLeap(year))monthArr[1]=29;
  return monthArr[month]
}

// 补零
const zero=function(str){
  str=parseInt(str);
  return str>9?str:'0'+str;
}

// 接受形参，默认值为字符串yyyy-mm-dd
const getToday=function(str="yyyy-mm-dd"){
  const date=new Date();
  // 获取年月日时分秒
  const year=date.getFullYear(),
  month=zero(date.getMonth()+1),
  day=zero(date.getDay()),
  hour=zero(date.getHours()),
  minute=zero(date.getMinutes()),
  second=zero(date.getSeconds());
  let result="";
  switch(str){
     
  }
}