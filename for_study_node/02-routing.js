const http = require('node:http');

const server = http.createServer((req, res) => {
  const url = req.url;
  // 当你访问 http://localhost:4001/ 时，url的值为 / 同时会访问一个 favicon.ico
  console.log(url, 'url')
  
  // routing
  console.log(url, 'routing')
  if (url === '/') {
    // 注意⚠️： res.writeHeader() 必须在 res.write() 之前
    // 浏览器判断一个请求是否成功，是根据响应头中的状态码来判断的
    res.writeHeader(200, {
      'Content-Type': 'text/html;charset=utf-8',
      'my-header': 'my-header'
    })
    res.write('index');
    res.end();
  } else if (url === '/login') {
    res.write('login');
    res.end();
  } else {
    res.write('404');
    res.end();
  }
})


server.listen(4001, () => {
  console.log('server is running at port 4001');
})
