var fdj = document.querySelector('.fdj');
var left = document.querySelector('.left');
var zhezhao = document.querySelector('.zhezhao');
var right = document.querySelector('.right');

// 鼠标移入事件
left.onmouseenter = function(){
    zhezhao.style.display = 'block';
    right.style.display = 'block';
}

// 鼠标移除事件
left.onmouseleave = function(){
    zhezhao.style.display = 'none';
    right.style.display = 'none';
}

// 鼠标移动事件
left.onmousemove = function(e){
    // console.log(e)
    // 容器距离屏幕的距离
    var x = e.pageX - 150 - fdj.offsetLeft;
    var y = e.pageY - 112.5 - fdj.offsetTop;
    if(x<0){
        x=0
    }
    if(x>300){
        x=300
    }
    if(y<0){
        y=0
    }
    if(y>225){
        y=225
    }
    zhezhao.style.top = y +'px';
    zhezhao.style.left = x +'px';

    right.style.backgroundPosition = `${(-x*2)}px  ${(-y*2)}px`;
}