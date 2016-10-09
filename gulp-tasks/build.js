const Handlebars = require('gulp-compile-handlebars');
const rename = require('gulp-rename');
const htmlmin = require('gulp-htmlmin');
const fs = require('fs');

const readStyles = () => fs.readFileSync('tmp/css/main.css', 'utf8');

const canonical = (url, amp) => {
  const data = (amp && amp.compile &&  amp.url) ?
    {url: amp.url, rel: 'amphtml'} : 
    {url, rel: 'canonical'};

  return (data.url) ? `<link rel="${data.rel}" href="${data.url}">` : '';
};

function buildTask (gulp, configTemplate) {
  configTemplate.styles = configTemplate.styles || readStyles();
  const hbsOptions = {
    batch: ['./src/templates/partials'],
    helpers: {
      canonical: canonical
    },
  };

  return gulp.src('src/templates/index.hbs')
          .pipe(Handlebars(configTemplate, hbsOptions))
          .pipe(htmlmin({collapseWhitespace: true, minifyCSS: true}))
          .pipe(rename('index.html'))
          .pipe(gulp.dest('public'));
};

module.exports = buildTask;
