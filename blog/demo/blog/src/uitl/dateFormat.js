export function formatDate(dateTime){
  const date = new Date(dateTime)
  const year = date.getFullYear()
  const month = date.getMonth() + 1 // 注意月份从0开始计数
  const day = date.getDate().toString().padStart(2, '0')
  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')

  return `${year}年${month}月${day}日 ${hours}:${minutes}`
}