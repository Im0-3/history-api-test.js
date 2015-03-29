var gulp = require('gulp');
var path = require('path');

var $ = globalSet.plugins;
var config = globalSet.config;

gulp.task('sass', function(){
  var errorMassage = 'Error: <%= error.message %>';
  var successMassage = 'Scss files was Compiled!';

  return gulp.src( globalSet.getPath('sass') )
    .pipe($.cached('sass'))
    .pipe($.plumber({
      errorHandler: $.notify.onError(errorMassage)
    }))
    .pipe($.csscomb())
    .pipe(gulp.dest( globalSet.getPath('sass', 'comb') ))
    .pipe($.sass(config.sassOptions))
    .pipe($.autoprefixer(config.autoprefixer))
    .pipe($.if(config.cssmin, $.csso()))
    .pipe($.if(config.cssmin, $.rename({extname: '.min.css'})))
    .pipe(gulp.dest( globalSet.getPath('sass', 'dest') ))
    .pipe($.notify(successMassage))
    .pipe($.browser.reload({stream:true}));
});
