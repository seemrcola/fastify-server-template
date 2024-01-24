module.exports = {
  apps : [{
      name: 'recorder-api',
      script: 'npm',
      args: 'start',
      // instances: 0, // 0 表示根据 CPU 核心数启动进程
      // exec_mode: 'cluster',
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: ['101.34.87.59'], // 这里改为你的服务器 IP 数组
      ref: 'origin/main',
      repo: 'https://github.com/seemrcola/fastify-server-template.git',
      path: '/var/www/recorder',
      'post-deploy': 'npm i && pm2 startOrReload ecosystem.config.js --env production',
    },
  },
}
