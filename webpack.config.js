const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { NetlifyPlugin } = require('netlify-webpack-plugin')

module.exports = {
  entry: './src/index.tsx',
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
    https: true,
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
      '@components': path.resolve(__dirname, 'src/components/'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@icons': path.resolve(__dirname, 'src/icons'),
      '@context': path.resolve(__dirname, 'src/context'),
      '@preferences': path.resolve(__dirname, 'src/components/Preferences'),
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
