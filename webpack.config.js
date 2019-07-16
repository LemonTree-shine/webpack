var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    devServer:{ //开发服务器配置
        port:3000,
        progress:true,
        contentBase:"./dist"

    },
    //mode:"production",  //mode:打包模式，两种production，development
    //mode:"development",
    entry:"./src/index.js",   //入口文件
    output:{
        filename:"bundle.js",  //打包输出文件
        publicPath:"//localhost:9999/",
        path:path.resolve(__dirname,"dist")  //必须是一个绝对路径
    },
    module:{
        rules:[{
            test:/\.css$/,
            use:[
                {loader:"style-loader"},
                {loader:"css-loader"},
                {loader:"postcss-loader"},
                
            ]
        },{
            test:/\.less$/,
            use:[
                {loader:"style-loader"},
                {loader:"css-loader"},
                {loader:"less-loader"},
                {loader:"postcss-loader"},
            ]
        },{
            test:/(\.js|\.jsx|\.ts|\.tsx)$/,
            use: {
				loader:'babel-loader',
				options: {
					presets: ['@babel/preset-env','@babel/preset-react'],
					plugins: [
						['import', {"libraryName": "antd-mobile", "style": "css"}],
					]
				}
			},
            exclude:/node_modules/
        }]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./src/index.html",
            filename:"index.html",
            //hash:true,
            // minify:{    //模板优化控制
            //     removeAttributeQuotes:true,
            //     collapseWhitespace:true
            // }
        })
    ]
}

