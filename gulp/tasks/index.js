module.exports = function (gulp, config, plugins) {
  /*
   * Copy main index.html file to 'buildPath'.
  */
  gulp.task('index', function() {
    return gulp.src(config.srcPath + '/index.html')
      .pipe(gulp.dest(config.buildPath));
  });
};