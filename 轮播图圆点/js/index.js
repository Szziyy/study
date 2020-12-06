var preDiv = document.querySelector(".pre");
var nextDiv = document.querySelector(".next");
var imgAll = document.querySelectorAll(" .imgItem");
var radiosAll = document.querySelectorAll(" .radiosItem");

var page = 0;

// 设置点击事件
nextDiv.onclick = function(){
    page +=1;
    if( page >=imgAll.length){
        page = 0
    }
    readerNumber();
}

preDiv.onclick = function(){
    page -=1;
    if( page < 0 ){
        page = imgAll.length-1;
        readerNumber();
    }
   
}

function readerNumber(){
    imgAll.forEach(item =>{
        item.classList.remove("active");
    })
    radiosAll.forEach(item =>{
        item.classList.remove("active");
    })
    imgAll[page].classList.add("active");
    radiosAll[page].classList.add("active");
}

// radiosAll.forEach(item=>{
//     item.onclick = function(){
//         page = item.id[1];
//         readerNumber();
//     }
// })

for(var i=0;i<radiosAll.length;i++ ){
    radiosAll[i].onclick = ((index)=>{
        return function(){
            page = index;
            readerNumber();
        }
    })(i)
}