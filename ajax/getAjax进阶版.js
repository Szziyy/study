function getAjax1(url,data,callbackFn){
    // 1创建xhr对象
    var xhr = new XMLHttpRequest();
    // 2设置请求的方法和路径
    // GET  表单提交deed数据会拼接到请求的路径里,效率高
    // POST 会将表单的数据放置到请求的body里,数据大,安全
    xhr.open('GET',url+"?"+parseData(Data));
    // xhr.open('GET','http:123?123');
    // 3发送数据
    xhr.send();
    // xhr.send('123');
    // 4监听后台是否返回数据
    xhr.onreadystatechange = function(){
        if(xhr.readyState===4&&xhr.status===200){
           //  处理数据
           callbackFn(xhr);
        }
    }

    function parseData(Data){
        var str = "?";
        for(let key in data){
            str = str + key + "=" + data[key] +"&" 
        }
        str.substr(0,str.length-1);
        return str;
    }
}