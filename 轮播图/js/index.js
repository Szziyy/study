var preDiv = document.querySelector(".pre");
var nextDiv = document.querySelector(".next");
var imgAll = document.querySelectorAll(".imgItem");

var page = 0;

// 设置点击事件
nextDiv.onclick = function(){
    page +=1;
    imgAll.forEach(item =>{
        item.classList.remove("active");
    })
    if( page >=imgAll.length){
        page = 0
    }
    imgAll[page].classList.add("active");
}

preDiv.onclick = function(){
    page -=1;
    imgAll.forEach(item =>{
        item.classList.remove("active");
    })
    if( page < 0 ){
        page = imgAll.length-1;
    }
    imgAll[page].classList.add("active");
}