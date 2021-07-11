const buf=Buffer.from('runoob','ascii');
console.log(buf.toString('hex'));
console.log(buf.toString('base64'));

//创建
const buf1=Buffer.alloc(10);
const buf2=Buffer.alloc(10,1);
