const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware("/helix/users", {
      target: "https://api.twitch.tv",
      changeOrigin: true,
    })
  );
};
