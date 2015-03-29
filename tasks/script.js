var gulp = require('gulp');
var path = require('path');

var $ = globalSet.plugins;
var config = globalSet.plugins;

gulp.task('js', function(){
  var errorMassage = 'Error: <%= error.message %>';
  var successMassage = 'JavaScript files was Copied!';

  gulp.src(globalSet.getPath('js'))
    .pipe($.plumber({
      errorHandler: $.notify.onError(errorMassage)
    }))
    .pipe($.uglify())
    .pipe($.notify(successMassage))
    .pipe($.browser.reload({stream:true}));
    console.log(globalSet.getPath('js', 'dest'));
});
