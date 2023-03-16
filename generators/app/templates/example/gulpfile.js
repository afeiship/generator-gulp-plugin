'use strict';

var gulp = require('gulp');
var plugin = require('..');

gulp.task('demo', function () {
  return gulp.src('src/*.js').pipe(plugin('/* My demo*/\n')).pipe(gulp.dest('dist'));
});

gulp.task('default', gulp.series(['demo']));
