const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: "./src/index.ts",
  devtool: "source-map",
  target: [
    'web',
    'es2015'
  ],
  output: {
    path: path.resolve("dist"),
    filename: "[name].js",
    libraryTarget: 'umd',
    library: 'lib',
    umdNamedDefine: true,
    globalObject: `(typeof self !== 'undefined' ? self : this)`
  },
  externals: {
    'react': 'react',
    'react-dom': 'react-dom',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', "es2015", "es2016"],
          }
        }
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                sourceMap: true,
                javascriptEnabled: true,
              }
            },
          },
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.json', ".tsx"]
  },
  devServer: {
    port: 3000,
    open: true,
    hot: true
  },
  plugins: [new MiniCssExtractPlugin(), new CopyWebpackPlugin({
    patterns: [
      {
        from: "node_modules/antd/lib",
        to: 'antd/lib',
      },
      {
        from: "node_modules/@heroicons/react/outline",
        to: 'icons/outline',
      },
      {
        from: "node_modules/@heroicons/react/solid",
        to: 'icons/solid',
      },
    ],
  })],
}
