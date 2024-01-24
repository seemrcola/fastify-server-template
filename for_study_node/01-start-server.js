/////////////////////////
// 使用http创建服务
const http = require('node:http');
const fs = require('node:fs');

// 启动一个服务
const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === '/') {
    const html = fs.readFileSync('./index.html', 'utf-8');
    res.write(html);
    res.end();
  }
})

// 监听这个服务上的4001端口 一个端口只能被一个服务监听 同样一个服务也只能监听一个端口
server.listen(4001, () => {
  console.log('server is running at port 4001');
})

// 如果你尝试继续监听4002端口，会报 throw new ERR_SERVER_ALREADY_LISTEN 错误
// server.listen(4002, () => {
//   console.log('server is running at port 4002');
// })
