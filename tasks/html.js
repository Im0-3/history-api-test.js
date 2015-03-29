var gulp = require('gulp');
var path = require('path');

var $ = globalSet.plugins;
var config = globalSet.plugins;

gulp.task('html', function(){
  var errorMassage = 'Error: <%= error.message %>';
  var successMassage = 'HTML files was Copied!';

  gulp.src(globalSet.getPath('html'))
    .pipe($.plumber({
      errorHandler: $.notify.onError(errorMassage)
    }))
    .pipe(gulp.dest(globalSet.getPath('html', 'dest')))
    .pipe($.htmlhint())
    .pipe($.htmlhint.reporter())
    .pipe($.htmlhint.failReporter())
    .pipe($.notify(successMassage))
    .pipe($.browser.reload({stream:true}));
    console.log(globalSet.getPath('html', 'dest'));
});
