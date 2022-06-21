const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    //where our bundling of react components start
    main: path.resolve(__dirname, './client/index.tsx'),
  },
  output: {
    //name the file 
    filename: 'bundle.js',
    //path where we put the file above into
    //created everytime npm run build 
    path: path.resolve(__dirname, './build'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /.(css|scss)$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  mode: 'development',
  resolve: {
    // Enable importing JS / JSX files without specifying their extension
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  devServer: {
    hot: true,
    proxy: {
      '*': { target: 'http://localhost:8080' },
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    })
  ]
};
