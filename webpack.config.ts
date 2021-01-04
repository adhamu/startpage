import * as path from 'path'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import * as HtmlWebPackPlugin from 'html-webpack-plugin'
import { NetlifyPlugin } from 'netlify-webpack-plugin'
import * as webpack from 'webpack'

const config: webpack.Configuration = {
  entry: './src/index.tsx',
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@global': path.resolve(__dirname, 'src/'),
    },
  },
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: './src/templates/index.html',
      filename: './index.html',
    }),
    new NetlifyPlugin({
      headers: {
        '/*.js': {
          'cache-control': {
            'max-age': 31536000,
          },
        },
      },
    }),
  ],
}

export default config
