var gulp = require('gulp');
var path = require('path');
var webpackConfig = require('../webpack.config.js');

var $ = globalSet.plugins;
var config = globalSet.config;

gulp.task('coffee', function(){
  var errorMassage = 'Error: <%= error.message %>';
  var successMassage = 'coffee file was compiled';

  return gulp.src( globalSet.getPath('coffee') )
    .pipe($.cached('coffee'))
    .pipe($.webpack(webpackConfig))
    .pipe($.plumber({
      errorHandler: $.notify.onError(errorMassage)
    }))
    .pipe($.webpack(webpackConfig))
    .pipe(gulp.dest( globalSet.getPath('coffee', 'dest') ))
    .pipe($.notify(successMassage))
    .pipe($.browser.reload({stream:true}));
});
