const path = require('path')

// 是否为生产环境
const isProduction = process.env.NODE_ENV !== 'development'

module.exports = {
    // 基本路径
    publicPath: process.env.Node_ENV === 'production' ? './' : './',
    // 输出文件目录
    outputDir: 'dist',
    // 放置静态资源目录
    assetsDir: 'static',
    // html输出路径
    indexPath: 'index.html',
    // 文件名哈希
    filenameHashing: true,
    // eslint-loader 是否在保存的时候检查
    lintOnSave: true,
    //  是否使用带有浏览器内编译器的完整构建版本
    runtimeCompiler: false,
    //  babel-loader 默认会跳过 node_modules 依赖。
    transpileDependencies: [], /* string or regex */
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: isProduction,
    //  设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性。
    crossorigin: '',
    //  在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)。
    integrity: false,
    // webpack配置
    // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    configureWebpack: config => { // (Object | Function)
        // 开发生产共同配置别名
        Object.assign(config.resolve, {
            alias: {
                '@': path.resolve('./src'),
                '@assets': path.resolve('./src/assets'),
                '@components': path.resolve('./src/components'),
                '@mixins': path.resolve('./src/mixins'),
                '@store': path.resolve('./src/store'),
                '@views': path.resolve('./src/views')
            }
        })

        // 公共代码抽离
        config.optimization = {
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        chunks: 'all',
                        test: /node_modules/,
                        name: 'vendor',
                        minChunks: 1,
                        maxInitialRequests: 5,
                        minSize: 0,
                        priority: 100
                    },
                    common: {
                        chunks: 'all',
                        test: /[\\/]src[\\/]js[\\/]/,
                        name: 'common',
                        minChunks: 2,
                        maxInitialRequests: 5,
                        minSize: 0,
                        priority: 60
                    },
                    styles: {
                        name: 'styles',
                        test: /\.(sa|sc|c)ss$/,
                        chunks: 'all',
                        enforce: true
                    },
                    runtimeChunk: {
                        name: 'manifest'
                    }
                }
            }
        }
    },
    chainWebpack: config => {
        // 压缩图片
        const imagesRule = config.module.rule('images')
        imagesRule.uses.clear()
        imagesRule.use('file-loader')
            .loader('url-loader')
            .options({
                limit: 10240,
                fallback: {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'static/images'
                    }
                }
            })


    },
    // webpack-dev-server 相关配置
    devServer: {
        open: false,
        host: '0.0.0.0',
        port: 8080,
        hot: true,
        https: false,
        hotOnly: false,
        // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/cli-service.md#配置代理
        proxy: {
            '/api': {
                target: 'http://localhost:8080/',
                changeOrigin: true,
                secure: false,
                pathRewrite: {
                    '^/api': '/api'
                }
            }
        }, // 设置代理
        // 需要gzip压缩的文件
        before(app, server){}
    },
    // vue-loader 配置项
    // https://vue-loader.vuejs.org/en/options.html
    // vueLoader: {},
    // css相关配置
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {},
        // 启用 CSS modules for all css / pre-processor files.
        requireModuleExtension: false
    },
    // use thread-loader for babel & TS in production build
    // enabled by default if the machine has more than 1 cores
    parallel: require('os').cpus().length > 1,
    // 是否启用dll
    // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode
    // dll: false,
    // PWA 插件相关配置 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli-plugin-pwa/README.md
    // see vuejs/vue-cli
    pwa: {},

    // 第三方插件配置
    pluginOptions: {
        // ...
    }
}
