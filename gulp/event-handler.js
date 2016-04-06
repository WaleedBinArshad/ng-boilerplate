module.exports = function(plugins) {
  return {
    /*
     * Counter for number of errors.
     * Incremented everytime 'onError' function is invoked.
    */ 
    errorsCount: 0,


    /*
     * Error handler for gulp exceptions.
    */
    onError: function( error ) {
      plugins.nodeNotifier.notify({
        'title': 'Error',
        'message': 'Check Console'
      });

      this.errorsCount++;
      plugins.util.log(error);
      this.emit('end');
    },


    /*
     * Function to check for errors after a task was completed.
    */
    onTaskComplete: function( taskName ) {
      if( this.errorsCount > 0 ) {
        plugins.util.log(plugins.util.colors.bgRed('Task "' + taskName + '" terminated because of error(s)'));
        process.exit(1);
      }
      else 
        plugins.util.log(plugins.util.colors.bgGreen('Task "' + taskName + '" completed successfully'));
    }
  }
};