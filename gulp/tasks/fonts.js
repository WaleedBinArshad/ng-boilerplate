module.exports = function (gulp, config, plugins) {
  /*
   * Copy all fonts to 'distPath' if its a production
   * build, otherwise copy to 'buildPath'.
   *
   * Copied fonts are also cached, so, if a new font file is added,
   * only that file is copied.
  */
  gulp.task('fonts', function() {
    return gulp.src(config.srcPath + '/fonts/**/*')
      .pipe(plugins.cached('fonts-task-cache'))
      .pipe(plugins.if(config.prodBuild, 
        gulp.dest(config.distPath + '/fonts'),
        gulp.dest(config.buildPath + '/fonts'))
      );
  });
};