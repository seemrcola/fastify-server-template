const http = require('node:http');
const fs = require('node:fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  
  if(url === '/') {
    const readStream = fs.createReadStream('./index.html');
    readStream.on('data', (chunk) => {
      res.write(chunk);
    })
    readStream.on('end', () => {
      res.end();
    })
  }
})

server.listen(4001, () => {
  console.log('server is running at port 4001');
})
