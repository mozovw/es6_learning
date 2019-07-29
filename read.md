### webpack
```
入口 (entry)
入口会指示 webpack 应该使用哪个模块，来作为构建其内部依赖图的开始
输出 (output):
output 属性会告诉 webpack 在哪里输出它创建的 bundles ，以及如何命名这些文件，默认值为 ./dist:
loader
（ webpack 自身只理解 JavaScript ）。loader 可以将所有类型的文件转换为 webpack 能够有效处理的模块
插件 (plugins)
打包优化、压缩、定义环境变量

// 通过 npm 安装
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = {
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader",
          options: [
            presets: ["env"]
          ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
}
```

### 需要用到的指令
```
// 修饰器（Decorator）是一个函数，用来修改类的行为。
npm install babel-core babel-plugin-transform-decorators

```

### let 
- 声明的变量只在 let 命令所在的代码块内有效。
- 不能重复声明
- 不会变量提升

### const 
- 声明一个只读的常量，一旦声明，常量的值就不能改变。
- 声明必须初始化    
