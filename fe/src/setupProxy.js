
import { createProxyMiddleware } from 'http-proxy-middleware';

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://capstone-socialmedia-backend.onrender.com',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    })
  );
};