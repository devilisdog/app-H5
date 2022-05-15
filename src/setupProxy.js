const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      // 市场（1.3）代理服务器地址
      target: 'http://10.10.10.10:7075/',
      // target: "http://api.16.162.100.6.nip.io",
      secure: false,
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    }),
  );
  app.use(
    createProxyMiddleware('/apis', {
      // 代理服务器地址
      target: 'http://test.18.163.114.57.nip.io',
      // target: "http://api.16.162.100.6.nip.io",
      secure: false,
      changeOrigin: true,
      pathRewrite: {
        '^/apis': '',
      },
      // cookieDomainRewrite: {
      //   target: "http://test.16.162.100.6.nip.io",
      // }
    }),
  );
};
