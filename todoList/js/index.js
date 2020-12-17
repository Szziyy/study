 // 事件存储的容器
 if(localStorage.todoList === undefined){
    var todoList = [];
}else{
    var todoList = JSON.parse(localStorage.todoList);
}


// 获取输入框
var inputDom = document.querySelector('#input');

// 获取正在完成的容器
var doingListDiv = document.querySelector('.doing .list');
// 获取已完成的容器
var doneListDiv = document.querySelector('.done .list');

var main = document.querySelector('.main');

var doneNumDiv = document.querySelector('.done .num');
var doingNumDiv = document.querySelector('.doing .num');


// 为输入框绑定点击事件
inputDom.onkeydown = function(e){
    if(e.key == 'Enter'){
        console.log(e);
        console.log(e.target.value);
        var item = {
            context:e.target.value,
            idDone:false
        }
        todoList.push(item);
        console.log(todoList);
        render(todoList);
        e.target.value = ''
    }
}

function render(todoList){
    // 将对象数组转换为json对象的字符串
    localStorage.todoList = JSON.stringify(todoList);
    // 每一次渲染清空之前的内容
    doingListDiv.innerHTML = '';
    doneListDiv.innerHTML = '';
    // 显示条数
    // doingNumber.innerHTML = '';
    // doneNumber.innerHTML = '';
    var doneNumber = 0;
    var doingNumber = 0;
    todoList.forEach((item,index)=>{
        var todoItemDiv = document.createElement('div');
    todoItemDiv.className = 'todoItem';
        if(item.idDone){
            todoItemDiv.innerHTML = `
            <input type="checkbox" checked="checked" data-index="${index}">
            <div class="context">${item.context}</div>
            <div class="del">删除</div>`;
            doneListDiv.appendChild(todoItemDiv);
            doneNumber++;
        }else{
            todoItemDiv.innerHTML = `
            <input type="checkbox" data-index="${index}">
            <div class="context">${item.context}</div>
            <div class="del">删除</div>`;
            doingListDiv.appendChild(todoItemDiv);
            doingNumber++;
        }
    })
    // console.log(doneNumber);
    // console.log(doingNumber);
    // 渲染出条数
    doneNumDiv.innerHTML = doneNumber;
    doingNumDiv.innerHTML = doingNumber;
}

render(todoList);

    // 改变事件
doingListDiv.onchange = function(e){
    // 获取索引值
    var index = e.target.dataset.index;
    todoList[index].idDone = true;
    console.log(todoList);
    render(todoList);
}

doneListDiv.onchange = function(e){
    // 获取索引值
    var index = e.target.dataset.index;
    todoList[index].idDone = false;
    render(todoList);
}

main.onclick = function(e){
    if(e.target.className == 'del'){
     // 获取索引值
    var index = e.target.dataset.index;
    todoList.splice(index,1)
    render(todoList);
    }
}