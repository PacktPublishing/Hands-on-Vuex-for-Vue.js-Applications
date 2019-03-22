module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      "^/api": {
        target: "http://localhost:3001",
        pathRewrite: { "^/api": "" } // requests to /api/a will be transformed to /a
      }
    }
  }
};
