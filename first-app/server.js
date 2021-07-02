var http=require("http");
http.createServer(function(request,response){
    //发送http头部
    //http状态值：200 ：OK
    //内容类型：text/plain
    response.writeHead(200,{'content-Type':'text/plain'});
    //发送响应数据"hello world"
    response.end("hello world\n");

}).listen(8888);

//终端打印如下信息
console.log("server running at http://127.0.0.1:8888/");