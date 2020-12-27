import Mock from 'mockjs';


// 设置一下模拟返回数据的时间
Mock.setup({
    timeout:'200-600'
})


var data = Mock.mock(
    "/user/userinfo",
    "get",
    (req,res)=>{
        // 请求响应的参数
        console.log(req);
        return {
            username:'sue',
            type:'123'
        }
    }
)

Mock.mock(
    /\/account.*/,
    "get",
    (req,res)=>{
        // 请求响应的参数
        console.log(req);
        return {
            username:'sue',
            type:'123'
        }
    }
)

// 输出结果
console.log(JSON.stringify(data, null, 4))