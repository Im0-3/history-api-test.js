var gulp = require('gulp');
var path = require('path');

var $ = globalSet.plugins;
var config = globalSet.plugins;

//imagemin
gulp.task( 'imagemin', function(){
  var imageminOptions = {
    optimizationLevel: 7
  };

  gulp.src( globalSet.getPath('images', 'src') )
    .pipe($.changed( globalSet.getPath('images', 'dest') ))
    .pipe($.imagemin( imageminOptions ))
    .pipe(gulp.dest( globalSet.getPath('images', 'dest') ));
});
