var window = require('window');
var webpack = require('webpack');
var path  = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
// 获取当前运行的模式
var currentTarget = process.env.npm_lifecycle_event;
var debug, devServer, minimize;        // 是否是调试   是否是热更新模式   是否需要压缩       
console.log(currentTarget+'22222222222222222222222222222')
currentTarget =='build'?(debug = false, devServer = false, minimize = true):'';// 发布模式 
currentTarget == 'dev'?(debug = true, devServer = true, minimize = false):'';   // 开发模式
currentTarget == 'devhot'?(debug = true, devServer = true, minimize = false):'';// 热更新模式
//路径
var ROOT_PATH = path.resolve(__dirname);
var SRC_PATH = path.resolve(ROOT_PATH, 'src')
var BUILD_PATH = path.resolve(ROOT_PATH, 'dist');
module.exports = {
	context : SRC_PATH,
	//生产sourceMap,调试完成记得删除
	devtool : 'eval-source-map',
	entry : {
		/*
		main : './src/js/main.js'
		app : './src/app.js',*/
		vender : SRC_PATH + '/vender.js',
		main : SRC_PATH + '/main.js',
		styles : SRC_PATH + '/style.js'
	},
	output : {
		path : BUILD_PATH,
		filename : 'js/[name]-[chunkhash:8].bundle.js'
		//filename : 'js/[name].bundle.js',
		//publicPath : '/' //上线地址
		
	},
	/*resolve: {
	  alias: {//定义引用路径 import b from '~/components/b'
	    '~':resolve(__dirname, 'src')
	  }
	},*/
	 // webpack-dev-server的配置
	 devServer: {
	 	//contentBase: "./dist", //本地服务器所加载的页面所在的目录
		//colors: true, //终端中输出结果为彩色
		 historyApiFallback: true,//页面不跳转
		 hot: true,
		 inline: true,//实时刷新
		 progress: true,
		 port: 4040,
		 host: '127.0.0.1',
		 proxy: {
		 '*': {
			 target: '',
			 changeOrigin: true,
			 secure: false
		 }
		 }
	 },
	module : {
		loaders : [
		{test: /\.html$/,loader: 'html-withimg-loader'},
		{test: /\.html$/, loader: 'raw-loader'},
		{test:/\.js$/,loader:'babel-loader?cacheDirectory',exclude:path.resolve(__dirname,'node_modules'),
		//绝对路径 只解析src下的提高打包性能   cacheDirectory:重启webpack时不需要创新编译而是复用缓存结果减少编译流程
		include:SRC_PATH},
		{test:/\.css$/,loader:ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!postcss-loader' })},//压缩css-----------------?minimize
		 
		{test:/\.scss$/,loader:'style-loader!css-loader!sass-loader'},
		//{test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,loader: 'file-loader'},
		{test: /\.(png|jpg|jpg|ttf|eot|woff|woff2|svg)$/, loader: 'url-loader?limit=8192&name=images/[name].[hash:8].[ext]'},
		{test: /\.json$/,loader: 'json-loader'}
		]
	},
	
	plugins : [
	
		//require('autoprefixer')(),//创建浏览器规则,
		new htmlWebpackPlugin({
			template: SRC_PATH + '/index.html',
			filename : 'index.main.html',//-[chunkhash:8]
			inject : 'body',
			title : 'oms',
			favicon : SRC_PATH + '/components/base/img/favico.ico.ico',
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
	    //单独打包css
	    new ExtractTextPlugin("css/styles.css"),
	    //debug
	    new webpack.LoaderOptionsPlugin({
		    debug: true
		  }),
	   //清空文件夹
	   new CleanWebpackPlugin(['dist'], {
	        root: '', // An absolute path for the root  of webpack.config.js
	        verbose: true,// Write logs to console.
	        dry: false // Do not delete anything, good for testing.
	    }),
	    
		]
}
