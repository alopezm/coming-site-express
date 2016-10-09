const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

const input = 'src/templates/**/*.scss';
const output = 'tmp/css';
const sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

function sassTask(gulp, data) {
  return gulp.src(input)
          .pipe(sass(sassOptions).on('error', sass.logError))
          .pipe(autoprefixer())
          .pipe(gulp.dest(output));
};

module.exports = sassTask;
