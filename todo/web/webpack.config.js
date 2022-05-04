const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // Default settings 
    mode:'development',
    devtool:'inline-source-map',
    entry:{
        main: path.join(__dirname,'src','index.js')
    },
    output:{
        filename:'index.js',
        path: path.resolve(__dirname,'dist'),
        clean:true,
    },
    // Loaders
    module:{
        // JavaScript
        rules:[
            { 
                test: /\.js$/i, 
                use:{ 
                loader:'babel-loader', 
                options:{ 
                    "presets":['@babel/preset-react']
                }}
            },
            // Css
            {
                test: /\.css$/i, use:['style-loader','css-loader']
            },
            //scss - sass
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  "style-loader",
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
              },
              // images 
              {

                test: /\.(png|svg|jpg|jpeg|gif)$/i,
        
                type: 'asset/resource',
        
              },
        ]
    },
    // Plugins
    plugins:[
        new HtmlWebpackPlugin({
            template: path.join(__dirname,'public','index.html') ,
            filename:'index.html'
        })
    ],
    // DevServer
    devServer:{
        port:8080,
        open:true,
        compress:true,
        hot:true,
        liveReload:true,
    }
};