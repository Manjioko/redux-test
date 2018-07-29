const path = require('path');
const webpack = require('webpack');

module.exports = {
 
    /*入口*/
    entry: [
        'react-hot-loader/patch',
        path.join(__dirname, 'src/index.js')
    ],
    /*输出到dist文件夹，输出文件名字为bundle.js*/
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    module: {
      rules: [{
          test: /\.js[x]?$/,
          use: ['babel-loader?cacheDirectory=true'],
          include: path.join(__dirname, 'src')
      }]
    },
    devServer: {
      contentBase: path.join(__dirname, './dist'),
      port: 9999,
      host: '192.168.1.103',
      historyApiFallback: true,
      hot: true,
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    plugins:[
     new webpack.HotModuleReplacementPlugin()
    ]
};
