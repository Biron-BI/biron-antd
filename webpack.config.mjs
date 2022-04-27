import path from "path"
import  MiniCssExtractPlugin from "mini-css-extract-plugin"
import CopyWebpackPlugin from 'copy-webpack-plugin'

export default {
  entry: "./src/index.ts",
  devtool: "source-map",
  target: [
    'web',
    'es2020'
  ],
  output: {
    path: path.resolve("dist"),
    filename: "[name].esm.js",
    library: {
      type: 'module'
    }
  },
  experiments: {
    outputModule: true
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
          loader: "babel-loader"
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
    ],
  })],
}
