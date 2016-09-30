var gulp = require('gulp');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');
var clean = require('gulp-clean');
var htmlmin = require('gulp-htmlmin');
var fs = require('fs');
var config = require('./config.json');

gulp.task('clean', function () {
  return gulp.src('dist', {read: false})
    .pipe(clean());
});

gulp.task('build', ['clean'], function () {
    var styles = fs.readFileSync("src/style.css", "utf8");

    config.handlebars.lenguaje = config.handlebars.lenguaje || 'en';
    config.handlebars.styles = config.handlebars.styles || styles;

    return gulp.src('src/templates/index.hbs')
        .pipe(handlebars(config.handlebars))
        // .pipe(htmlmin({collapseWhitespace: true, minifyCSS: true}))
        .pipe(rename('index.html'))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['build']);
