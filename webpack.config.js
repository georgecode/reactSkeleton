module.exports = {
  //entry: this is the entry point AKA the file
  //webpack will transform
  entry: __dirname + '/app/index.js'

  //module: this is where you tell webpack what to
  //do with the code, each loader is a transformation
  //the code will go through before reaching
  //the browser
  module:{
    loaders: [
      {
        //test: tells webpack which files you want
        //affected by each loader
        test:/\.js$/,
        //exclude: is used to exclude files that meet
        //the above test criteria
        exclude:/node_modules/,
        //loader: is used to tell web pack what
        //transformations webpack should apply to the
        //above criteria
        loader:'babel-loader'
      }
    ]
  },//end module:
  //output: this is the location that the transformed
  //code will be out putted
  output:{
    //filename: this is the file you want transformed code
    //to be saved to
    filename: 'transformed.js',
    //path: this is the path to the file you want the
    //transformed code to be saved to
    path: __dirname + '/build'
  }
};