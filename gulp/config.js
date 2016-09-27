/*
 * All configurations used by the project are defined here.
*/ 
module.exports = {
  /*
   * Angularjs app name
  */
  ngAppName: 'app',
  
  /*
   * Folder paths.
  */
  srcPath:   'app',        // Path where the source code resides.
  buildPath: 'tmp',        // Path where the development build will be created.
  distPath:  'dist',       // Path where final distributable app will be placed.
  tasksPath: 'gulp/tasks', // Path where all gulp tasks reside.

  
  /*
   * List all stylesheets from bower_components here.
   * Globs are not allowed here and the order is important.
  */
  vendorCss: [
    'bower_components/angular-material/angular-material.css'
  ],

  
  /*
   * List all javascripts from bower_components here.
   * Globs are not allowed here and the order is important.
  */
  vendorJs: [
    'bower_components/angular/angular.js',
    'bower_components/angular-ui-router/release/angular-ui-router.js',
    'bower_components/angular-aria/angular-aria.js',
    'bower_components/angular-animate/angular-animate.js',
    'bower_components/angular-material/angular-material.js'
  ],

  
  /*
   * List all fonts from bower_components here.
  */
  vendorFonts: []
};