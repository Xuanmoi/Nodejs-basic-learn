var fs=require("fs");
var data="菜鸟教程官网地址是哪里？";
//创建一个可以写入的流，写入到文件output.txt中
var writerStream=fs.createWriteStream('output.txt');
//使用utf-8编码写入数据
writerStream.write(data,'UTF8');

//标记文件末尾
writerStream.end();

//处理流事件 -->finish,error
writerStream.on('finish',function(){
    console.log("写入完成");
});
writerStream.on('error',function(err){
    console.log(err.stack);
})
console.log("程序执行完毕。");