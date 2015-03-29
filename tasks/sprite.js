var gulp = require('gulp');
var path = require('path');

var $ = globalSet.plugins;
var config = globalSet.config;

gulp.task('sprite', function(){
  var errorMassage = 'Error: <%= error.message %>';
  var successMassage = 'HTML files was Copied!';

  var spriteData = gulp.src(globalSet.getPath('sprite'))
    .pipe($.plumber({
      errorHandler: $.notify.onError(errorMassage)
    }))
    .pipe($.spritesmith(config.spritesmith));

  spriteData.css
    .pipe(gulp.dest( globalSet.getPath('sprite', 'cssDest') ));

  spriteData.img
    .pipe($.imagemin())
    .pipe(gulp.dest( globalSet.getPath('sprite', 'imgDest') ));
});
