const htmlEl = document.documentElement
    
function setRemUnit(){
 // 获取HTML的宽度 视口宽度
   const htmlWidth = htmlEl.clientWidth
 //  根据宽度计算一个HTML的fontsize大小
   const htmlFontSize=htmlWidth/10
   // 将fontsize设置到HTML上
   htmlEl.style.fontSize=htmlFontSize+"px"
}
//  保证第一次进来是，可以设置一次fontsize
setRemUnit()
// 当屏幕发生变化时，实时来修改HTML的fontsize大小
 window.addEventListener("resize",setRemUnit)
