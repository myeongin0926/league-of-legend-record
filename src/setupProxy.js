const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function setupProxy(app) {
  app.use(
    "/asia",
    createProxyMiddleware({
      target: "https://asia.api.riotgames.com",
      changeOrigin: true,
      pathRewrite: {
        "^/asia": "/",
      },
    }),
  );

  app.use(
    "/kr",
    createProxyMiddleware({
      target: "https://kr.api.riotgames.com",
      changeOrigin: true,
      pathRewrite: {
        "^/kr": "/",
      },
    }),
  );
};
