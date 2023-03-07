const gulp = require('gulp');
  const create = require('gulp-cordova-create');
  const version = require('gulp-cordova-version');
const del = require('del');
const fs = require('fs');

gulp.task('default', gulp.series(() => gulp.src('.')
    .pipe(version(require('./package.json').version))));

gulp.task('build-web', gulp.series(() => del([
    'dist/assets/Android',
    'dist/assets/iOS',
  ])));

gulp.task('create-www', () => {
  if (!fs.existsSync('/www')) {
    return gulp.src('*.*', { read: false })
      .pipe(gulp.dest('./www'));
  }
});
