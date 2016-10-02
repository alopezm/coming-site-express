'use strict';

const gulp = require('gulp');

const task = (task, data) => () => require(`./gulp-tasks/${task}`)(gulp, data);

const config = require('./config.json');
config.template.lenguaje = config.template.lenguaje || 'en';

gulp.task('clean', task('clean'));
gulp.task('sass', task('sass', ['clean']));
gulp.task('build', ['sass'], task('build', config.template));
gulp.task('default', ['build']);
