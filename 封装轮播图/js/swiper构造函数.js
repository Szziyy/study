function Swiper(name,imgListT){
    var nameDiv = document.querySelector(name);
    var that = this;
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
    this.preDiv = document.querySelector(".pre");
    this.nextDiv = document.querySelector(".next");
    this.imgAll = document.querySelectorAll(" .imgItem");
    this.radiosAll = document.querySelectorAll(" .radiosItem");
    
    this.page = 0;
    
    // 设置点击事件
    this.nextDiv.onclick = ()=>{
        that.page +=1;
        if( that.page >=this.imgAll.length){
            that.page = 0
        }
        this.readerNumber();
    }
    
    this.preDiv.onclick = ()=>{
        that.page -=1;
        if( that.page < 0 ){
            that.page = this.imgAll.length-1;
            this.readerNumber();
        }
       
    }
    

    for(var i=0;i<this.radiosAll.length;i++ ){
        this.radiosAll[i].onclick = ((index)=>{
            return function(){
                that.page = index;
                this.readerNumber();
            }
        })(i)
    }

}

Swiper.prototype.readerNumber =function(){
    this.imgAll.forEach(item =>{
        item.classList.remove("active");
    })
    this.radiosAll.forEach(item =>{
        item.classList.remove("active");
    })
    this.imgAll[this.page].classList.add("active");
    this.radiosAll[this.page].classList.add("active");
}


Swiper.prototype.go = function(i){
    this.page = i;
    this.readerNumber();
}