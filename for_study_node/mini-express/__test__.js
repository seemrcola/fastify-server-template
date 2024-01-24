const createApp = require('./express')

const app = createApp()

// 中间件测试----------------------------------

app.use((req, res, next) => {
  console.log('middleware1');
  next();
})

app.use((req, res, next) => {
  console.log('middleware2');
  next();
})

app.use( (req, res, next) => {
  console.log('middleware3');
  next();
})

app.use('/api', (req, res, next) => {
  console.log('middleware4');
  next();
})

// 路由测试----------------------------------

app.get('/', (req, res) => {
  res.end('hello world!!!!!!!')
})

app.get('/api', (req, res) => {
  res.end('api page')
})

app.post('/login', (req, res) => {
  res.end('login page')
})

app.all('*', (req, res) => {
  res.end('404')
})

// 错误处理----------------------------------

app.use((err, req, res, next) => {
  console.log(err);
  res.end('error')
})

app.listen(4001, () => {
  console.log('server is running at port 4001');
})
