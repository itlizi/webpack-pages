// dev-server.js
const path = require('path')
const express = require('express')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const glob = require('glob');

// const fs = require('fs')
// const MemoryFs = require('memory-fs')

const webpackConfig = require('./build/webpack.base.conf')
const app = express();
const port = 8081;

// webpack编译器
const compiler = webpack(webpackConfig);

// webpack-dev-server中间件
const devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
});

app.use(devMiddleware)


// const mfs = new MemoryFs
// compiler.outputFileSystem = mfs
// 路由
app.get('/:viewname?', function(req, res, next) {
  let viewname = req.params.viewname
  console.log(viewname)
  if (viewname === 'favicon.ico') { return }
  viewname = (viewname || 'index') + '.html'

  let filepath = path.join(compiler.outputPath, viewname);
  // 使用webpack提供的outputFileSystem
  compiler.outputFileSystem.readFile(filepath, function(err, result) {
    if (err) {
        // something error
        return next(err);
    }
    res.set('content-type', 'text/html');
    res.send(result);
    res.end();
  });

});

module.exports = app.listen(port, function(err) {
  if (err) {
      // do something
      return;
  }

  console.log('Listening at http://localhost:' + port + '\n')
})




