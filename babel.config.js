// 项目发布阶段需要用到的babel插件
const prodPlugins = []
// 开发环境去掉console.log
if (process.env.NODE_ENV === 'production') {
    prodPlugins.push('transform-remove-console')
}
module.exports = {
    presets: ['@vue/cli-plugin-babel/preset'],
    plugins: [
        // 发布产品时候的插件数组
        ...prodPlugins
    ]
}