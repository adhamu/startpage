import * as webpack from 'webpack'
import * as path from 'path'
import * as HtmlWebPackPlugin from 'html-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import { NetlifyPlugin } from 'netlify-webpack-plugin'

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
        use: 'html-loader',
        exclude: /node_modules/,
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
          'Cache-Control': {
            'max-age': 31536000,
            public: true,
          },
        },
        '/*.woff2': {
          'Cache-Control': {
            'max-age': 31536000,
            public: true,
          },
        },
      },
    }),
  ],
}

export default config
