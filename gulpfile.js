const fs = require('fs')
const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const inlineMinify = require('gulp-minify-inline');
const replace = require('gulp-replace');

return gulp.task('default', () => {
  return gulp.src('src/index.html')
    .pipe(replace(/<link href="styles\/styles.css"[^>]*>/, function (s) {
      const style = fs.readFileSync('src/styles/styles.css', 'utf8');
      return '<style>\n' + style + '\n</style>';
    }))
    .pipe(inlineMinify())
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
});
