const path = require('path')
//__dirname总是指向被执行js文件的绝对路径
const resolve = p => path.resolve(__dirname, '../', p)
// 提供一种真实文件的一个简便映射
module.exports = {
	// 寻找上级目录下 src/platforms/web/entry-runtime-with-compiler 文件 是一种映射关系
  vue: resolve('src/platforms/web/entry-runtime-with-compiler'),
  compiler: resolve('src/compiler'),
  core: resolve('src/core'),
  shared: resolve('src/shared'),
  // 从config.js而来  包含web  路径为 src/platforms/web
  web: resolve('src/platforms/web'),
  weex: resolve('src/platforms/weex'),
  server: resolve('src/server'),
  sfc: resolve('src/sfc')
}


// path.resolve()可以将路径或者路径片段解析成绝对路径
// 传入的路径由右往左解析,遇到第一个绝对路径完成解析.
// 
// 1.参数为空：
// path.resolve()  输出: 当前文件所在文件夹路径
// 
// 2.参数为文件夹名字(参数>=1):
// path.resolve('path') 输出:当前文件所在文件夹的绝对路径 /path
// path.resolve('path1','path2') 输出:当前文件所在文件夹绝对路径 /path1/path2
// 
// 3. 某个参数为'./'+文件名
// path.resolve('./path') 输出:当前文件夹绝对路径/path
// path.resolve('path1','./path2') 输出:当前文件夹绝对路径 /path1/path2
// 
// 4.文件夹名字前加了'/'
// 无论是第几个文件前加了/ 最终都为: / + 最后一个前面加/的文件名 + '剩下的文件夹'
// path.resolve('/path') 输出: /path
// path.resolve('path1','path2','/path3') 输出为: /path3
// path.resolve('path1','/path2','/path3') 输出为: /path3
// path.resolve('path1','/path2','path3') 输出为: /path2/path3