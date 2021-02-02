module.exports = {
  entry: './js/app.js',
  //devtool: 'inline-source-map',
  //resolve: {
  //  extensions: [ '.tsx', '.ts', '.js' ]
 // },
  //output: {
  //  filename: 'bundle.js'
  //},
  devServer: {
    inline: false
  },
 // module: {
  //  rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
  //    { test: /\.tsx?$/, loader: "ts-loader" }
  //  ]
 // }
};
