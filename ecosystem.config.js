module.exports = {
  apps: [
    {
      name: "azure-vite-app",
      script: "serve",
      env: {
        PM2_SERVE_PATH: '/home/site/wwwroot/dist',
        PM2_SERVE_PORT: 8080,
      },
    }
  ]
}
