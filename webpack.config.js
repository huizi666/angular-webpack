var htmlWebpackPlugin = require('html-webpack-plugin');
var path  = require('path')
module.exports = {
	context : __dirname,
	entry : {
		/*hello : './src/js/hello.js',
		main : './src/js/main.js'*/
		app : './src/app.js'
		
	},
	output : {
		path : './dist',
		//filename : 'js/[name]-[chunkhash:8].bundle.js'
		filename : 'js/[name].bundle.js'
		//publicPath : 'https:www.celloud.cn/' 上线地址
	},
	module : {
		loaders : [
		{test:/\.js$/,loader:'babel-loader',exclude:path.resolve(__dirname,'node_modules'),
		//绝对路径 只解析src下的提高打包性能
		include:path.resolve(__dirname,'src')},
		{test:/\.css$/,loader:'style-loader!css-loader!postcss-loader'}
		]
	},
	plugins : {
		//for postcss
		new webpackLoaderOptionsPlugin({
			options : {
				postcss : function(){
					return [auroprefixer]
				},
			    devServer: {
			        contentBase: "./public", //本地服务器所加载的页面所在的目录
			        colors: true, //终端中输出结果为彩色
			        historyApiFallback: true, //不跳转
			        inline: true //实时刷新
			      }	
			}
		}),
		new htmlWebpackPlugin({
			template: './src/index.html',
			filename : 'index-[chunkhash:8].main.html',
			inject : 'body',
			title : 'oms',
			date : new Date()/*,
			minify : {
				//删除注释
				removeComments : true,
				//删除空格
				collapseWhitespace : true
			}*/
		})
		
		
	}
}
