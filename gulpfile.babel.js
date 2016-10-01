'use strict';

const gulp = require('gulp');
const handlebars = require('gulp-compile-handlebars');
const rename = require('gulp-rename');
const clean = require('gulp-clean');
const htmlmin = require('gulp-htmlmin');
const fs = require('fs');
const config = require('./config.json');

gulp.task('clean', () => gulp.src('dist', {read: false}).pipe(clean()) );

gulp.task('build', ['clean'], () => {
    const styles = fs.readFileSync("src/style.css", "utf8");

    config.handlebars.lenguaje = config.handlebars.lenguaje || 'en';
    config.handlebars.styles = config.handlebars.styles || styles;

    return gulp.src('src/templates/index.hbs')
        .pipe(handlebars(config.handlebars))
        .pipe(htmlmin({collapseWhitespace: true, minifyCSS: true}))
        .pipe(rename('index.html'))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['build']);
