function swiper(name,imgListT){
    var nameDiv = document.querySelector(name);
    
    function createSwiperHtml(imgListT){
        var radiosList = document.createElement('div');
        var imgList = document.createElement('div');
        imgList.className = 'imgList';
        radiosList.className = 'radiosList';
        imgListT.forEach((item,i )=> {
            if(i==0){
                imgList.innerHTML = imgList.innerHTML + '<div class="imgItem active" style="background-image: url('+item+');"></div>'
                radiosList.innerHTML = radiosList.innerHTML +' <div id="c'+i+'" class="radiosItem active"></div>'
            }else{
                imgList.innerHTML = imgList.innerHTML + '<div class="imgItem" style="background-image: url('+item+');"></div>'
                radiosList.innerHTML = radiosList.innerHTML +' <div id="c'+i+'" class="radiosItem"></div>'
            }
        });
        nameDiv.appendChild(imgList);
        nameDiv.appendChild(radiosList);
        nameDiv.innerHTML = nameDiv.innerHTML+ ` <div class="btnList">
                                    <div class="btn pre"><</div>
                                    <div class="btn next">></div>
                                </div>`
    }
    
    createSwiperHtml(imgListT);
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

}