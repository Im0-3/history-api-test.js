var gulp   = require('gulp');
var path   = require('path');
var config = require('./config');

//gulp-load-plugings
var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'gulp.*'],
  replaceString: /\bgulp[\-.]/
});

var APP_PATH = config.appPath;

//Path取得
function getPath(name, prop){
  prop = prop || 'src';
  if(!config.path[name] || !config.path[name][prop]){
    console.log('not found path ' + name + prop);
    return;
  }
  return generatePath(config.path[name][prop]);
}

function generatePath(path, relative){
  var appPath = relative ? '.' : APP_PATH;
  if(typeof path === 'object'){
    return path.map(function (val) {
      if (val.charAt(0) === '!') {
        return '!' + appPath + '/' + replaceTypeTag(val.substring(1));
      }
      return appPath + '/' + replaceTypeTag(val);
    });
  }
  return appPath + '/' + replaceTypeTag(path);
}

function replaceTypeTag(val) {
  if (config.defaultDir) {
    return val.replace(/%type%/g, config.defaultDir);
  }
  return val.replace(/\/%type%/g, '');
}

//browser-sync
$.browser = require('browser-sync');

global.globalSet = {
  plugins: $,
  config: config,
  getPath: getPath
};

//require tasks
var requireDir = require('require-dir'); //Gulpfile.jsの分割
var dir = requireDir('./tasks', {recurse: true}); //dir指定

//build
gulp.task('build', ['sass', 'coffee', 'html', 'imagemin'], function(){
  gulp.watch(getPath('sass'), ['sass']);
  gulp.watch(getPath('coffee'), ['coffee']);
  gulp.watch(getPath('html'), ['html']);
  gulp.watch(getPath('images'), ['imagemin']);
});

//watch
gulp.task('watch', ['sass', 'coffee', 'html', 'imagemin'], function(){
  gulp.watch(getPath('sass'), ['sass']);
  gulp.watch(getPath('coffee'), ['coffee']);
  gulp.watch(getPath('html'), ['html']);
  gulp.watch(getPath('images'), ['imagemin']);
});

gulp.task('default', ['watch', 'server']);
