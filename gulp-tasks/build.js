const handlebars = require('gulp-compile-handlebars');
const rename = require('gulp-rename');
const htmlmin = require('gulp-htmlmin');
const fs = require('fs');

const readStyles = () => fs.readFileSync('tmp/css/main.css', 'utf8');

function buildTask (gulp, configTemplate) {
  configTemplate.styles = configTemplate.styles || readStyles();
  return gulp.src('src/templates/index.hbs')
          .pipe(handlebars(configTemplate))
          .pipe(htmlmin({collapseWhitespace: true, minifyCSS: true}))
          .pipe(rename('index.html'))
          .pipe(gulp.dest('dist'));
};

module.exports = buildTask;
