var gulp = require('gulp');
var path = require('path');

var $ = globalSet.plugins;
var config = globalSet.plugins;

//imagemin
gulp.task( 'karma', function(){
  return gulp.src(globalSet.getPath('test', 'src'))
    .pipe($.karma({
      configFile: './karma.conf.js',
      action: 'run'
    }))
    .on('error', function(err) {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    });
});
