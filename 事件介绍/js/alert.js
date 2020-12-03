
/*
参数
params:{
    title:"是否添加蓝色方格呢",
    context:"是否添加蓝色方格呢",
    qdbtn:function(){
    var blueDiv = document.createElement('div');
    blueDiv.className='blueDiv';
    body.appendChild(blueDiv);
    },
    qxbtn:function(){
    }
}

*/


function zdyalert(params){
    var zhezhao = document.createElement('div');
    zhezhao.className = 'zhezhao';
    zhezhao.innerHTML = ` <div class="alert">
    <div class="header"><span class="title">${params.title}</span><span class="close">X</span></div>
    <div class="main">${params.context}</div>
    <div class="footer">
        <div class="btn1">确定</div>
        <div class="btn2">取消</div>
    </div>
</div>`;

var body = document.querySelector('body');

body.appendChild(zhezhao)
    
var closeDiv = document.querySelector('.close');
var btn1 = document.querySelector('.btn1');
var btn2 = document.querySelector('.btn2');

closeDiv.onclick = function(){
    body.removeChild(zhezhao);

}

btn1.onclick = function(){
    (typeof params.qdbtn)? params.qdbtn():console.log('没有该事件');
    body.removeChild(zhezhao);
}

btn2.onclick = function(){
    body.removeChild(zhezhao);
}

}