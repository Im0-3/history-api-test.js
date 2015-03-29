/**
 * タスク設定ファイル
 */
var fs = require("fs");
module.exports = {
  appPath: 'app',
  defaultDir: 'pc',
  //gulp-autoprefixer
  autoprefixer: {
    browser: ['last 3 version', 'ie >= 8', 'Android 4.0']
  },
  //gulp-sass
  sassOptions: {
    style : 'expanded'
  },
  //css minify
  cssmin: false,
  //css minify
  spritesmith: {
    imgName: 'sprite.png',
    cssName: '_sprite.sass',
    cssTemplate: 'template/sprite.mustache'
  },
  // パス設定
  path: {
    // html
    html: {
      src: 'source/%type%/**/*.html',
      dest: 'public/%type%/'
    },
    // SCSS
    sass: {
      src: 'source/%type%/sass/**/*.scss',
      comb: 'source/%type%/sass/',
      dest: 'public/%type%/css'
    },
    // EJS
    ejs: {
        src: ['source/%type%/**/*.ejs','!source/%type%/**/_*.ejs'],
        watch: ['source/%type%/**/*.ejs'],
        dest: 'public/%type%/'
    },
    // SpriteSmith
    sprite: {
        src: 'source/%type%/sprites/*',
        watch: 'source/%type%/sprites/**/*',
        imgDest: 'source/%type%/images',
        cssDest: 'source/%type%/sass/sprites',
        imgPath: '../images'
    },
    // JS Hint
    js: {
        src: ['source/%type%/js/*.js','!source/%type%/js/_*.js'],
        dest: 'public/%type%/js'
    },
    // coffee
    coffee: {
        src: 'source/%type%/coffee/*.coffee',
        dest: 'public/%type%/js'
    },
    // Image min
    images: {
        src: 'source/%type%/images/**/*',
        dest: 'public/%type%/images'
    },
    bower: {
        src: ['source/%type%/js/*.js','!source/%type%/js/_*.js'],
        dest: 'public/%type%/js'
    },
    test: {
        src: [
            'public/%type%/js/main.js',
            //'../bower_components/angular-mocks/angular-mocks.js',
            'source/%type%/**/*Spec.js'
        ]
    },
    copy: [
        {
            from: 'source/%type%/lib/**/*',
            to: 'public/%type%/lib'
        }
    ]
  }
};
