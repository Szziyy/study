var store =0;
function ramdomStr(){
    // 随机获取英文code码
    var codeNumber =  97+ parseInt(Math.random()*26);
    // 将随机获取的英文code码转换为小写英文
    var codeStr =  String.fromCharCode(codeNumber);
    // 将转换的小写英文转换为大写英文
    var codeUp =  codeStr.toUpperCase();
    console.log(codeNumber);
    console.log(codeStr);
    console.log(codeUp);

    // 获取div
    var showDiv = document.querySelector('#showDiv');
    showDiv.innerHTML = codeUp;
}

ramdomStr();

var body = document.body;
// 键盘点击事件
body.onkeydown = function(e){
    console.log(e.key)
    var showDiv = document.querySelector('#showDiv');
    // 判断div显示字符和键盘点击的是否一致
    if(e.key.toUpperCase() === showDiv.innerHTML){
        ++store;
        console.log('当前的分数'+store);
        ramdomStr();
    }
}

function fn(){
    alert('你一分钟可以打'+store*6+'个字');
}
setTimeout(fn,10000);