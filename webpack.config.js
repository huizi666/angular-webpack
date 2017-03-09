var window = require('window');
var webpack = require('webpack');
var path  = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
	context : __dirname,
	entry : {
		/*
		main : './src/js/main.js'
		app : './src/app.js',*/
		vender : './src/vender.js',
		style : './src/style.js',
		main : './src/main.js'
	},
	output : {
		path : './dist',
		//filename : 'js/[name]-[chunkhash:8].bundle.js'
		filename : 'js/[name].bundle.js',
		//publicPath : './dist' //上线地址
	},
	 // webpack-dev-server的配置
	 devServer: {
		 historyApiFallback: true,
		 hot: true,
		 inline: true,
		 progress: true,
		 port: 4040,
		 host: '127.0.0.1',
		 proxy: {
		 '*': {
			 target: 'http://localhost',
			 changeOrigin: true,
			 secure: false
		 }
		 }
	 },
	module : {
		loaders : [
		{test: /\.html$/,loader: 'html-withimg-loader'},
		{test: /\.html$/, loader: 'raw-loader'},
		{test:/\.js$/,loader:'babel-loader',exclude:path.resolve(__dirname,'node_modules'),
		//绝对路径 只解析src下的提高打包性能
		include:path.resolve(__dirname,'src')},
		{test:/\.css$/,loader:'style-loader!css-loader'},
		{test:/\.scss$/,loader:'style-loader!css-loader!postcss-loader!sass-loader'},
		//{test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,loader: 'file-loader'},
		{test: /\.(png|jpg|jpg|ttf|eot|woff|woff2|svg)$/, loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'},
		{test: /\.json$/,loader: 'json-loader'}
		]
	},
	plugins : [
		//require('autoprefixer')(),//创建浏览器规则,
		new htmlWebpackPlugin({
			template: './src/index.html',
			filename : 'index.main.html',//-[chunkhash:8]
			inject : 'body',
			title : 'oms',
			favicon : './favico.ico.ico',
			//hash : true,
			date : new Date(),
			minify : {
				//删除注释
				//removeComments : true,
				//删除空格
				//collapseWhitespace : true
			}
		}),
		new webpack.ProvidePlugin({
			$ : 'jquery',
			jQuery : 'jquery',
			'window.jQuery' : 'jquery' 
		}),
		//避免加载多次,处理重复代码
		new webpack.optimize.CommonsChunkPlugin({
	      names: "vender",// names: ['vender','manifest'],
	      filename: "js/[name].bundle.js",
	      minChunks: 2,
	    }),
	   //清空文件夹
	   new CleanWebpackPlugin(['dist'], {
	        root: '', // An absolute path for the root  of webpack.config.js
	        verbose: true,// Write logs to console.
	        dry: false // Do not delete anything, good for testing.
	    }),
		]
}
