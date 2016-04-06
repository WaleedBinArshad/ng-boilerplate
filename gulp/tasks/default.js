module.exports = function (gulp, config, plugins) {
  /*
   * Builds app for development at 'buildPath'
   * Also watches all files for changes and run tasks
   * to update development build.
   *
   * Run using 'gulp'
  */  
  gulp.task('default', ['build'], function () {
    gulp.watch(config.srcPath + '/scripts/**/*.+(js|coffee)', ['scripts']);
    gulp.watch(config.srcPath + '/styles/**/*.+(css|scss|less)', ['styles']);
    gulp.watch(config.srcPath + '/scripts/**/*.tpl.html', ['templates']);
    gulp.watch(config.srcPath + '/images/**/*', ['images']);
    gulp.watch(config.srcPath + '/fonts/**/*', ['fonts']);
    gulp.watch(config.srcPath + '/index.html', ['index']);
  });
};