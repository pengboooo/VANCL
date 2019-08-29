
module.exports = {}

var gulp = require('gulp')
var postcss = require('gulp-postcss')
var autoprefixer = require('autoprefixer')
var rpxtorem = require('postcss-rpxtorem')
gulp.task('css', function () {
  var processors = [
    autoprefixer({
      browsers: 'last 1 version'
    }),
    rpxtorem({
      replace: false
    })
  ]

  return gulp.src(['build/css/**/*.css'])
    .pipe(postcss(processors))
    .pipe(gulp.dest('build/css'))
})
