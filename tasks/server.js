var gulp = require('gulp');
var path = require('path');

var $ = globalSet.plugins;
var config = globalSet.config;

gulp.task('server', function() {
  $.browser({
    server: {
      baseDir: path.join(config.appPath, '/public/', config.defaultDir)
    },
    ghostMode: {
      location: true
    }
  });
});
gulp.task('reload',function() {
    $.browser.reload();
});
