const path = require('path'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry : './src/index.js',
    mode: "development",
    devServer : {
        static : './dist', 
    }, 

    plugins : [ 
        new HtmlWebpackPlugin({
            template : './src/index.html', 
            title : 'Sushi'
        })
    ], 

    module: {
        rules: [
          {
            test: /\.css$/i, 
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i, 
            type: 'asset/resource'
          }, 
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i, 
            type: 'asset/resource',
          } 
  
          
        ],
      }, 

    output : {
        filename : '[name].bundle.js', 
        path: path.resolve(__dirname, 'dist'), 
        clean : true,
    }
}