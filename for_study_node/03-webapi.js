const http = require('node:http');

const server = http.createServer((req, res) => {
  const url = req.url;
  
  // api 简单理解api和路由的区别在于，api是返回的数据，而路由是返回的页面
  if (url === '/api') {
    res.writeHeader(200, {
      'Content-Type': 'application/json;charset=utf-8'
    })
    res.write(JSON.stringify({
      name: 'tom',
      age: 18
    }));
    res.end();
  }
})

server.listen(4001, () => {
  console.log('server is running at port 4001');
})
