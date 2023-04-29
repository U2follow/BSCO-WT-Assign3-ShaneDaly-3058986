const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (env) => {
  return {
    devServer: {
      setupMiddlewares: (middlewares, devServer) => {
        middlewares.push(
          createProxyMiddleware('/api', {
            target: process.env.REACT_APP_BACKEND_URL,
            changeOrigin: true,
          })
        );
        return middlewares;
      },
    },
  };
};
