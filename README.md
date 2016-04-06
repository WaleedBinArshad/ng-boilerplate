# ng-boilerplate
> Simple, easy and efficient build management system for angularjs apps. Built on Gulp.

The purpose of this project is to provide a boilerplate to quickly start building Angularjs applications. Inspired from [ngbp](https://github.com/ngbp/ngbp) but with the goodness, power and speed of Gulp. It's packed with all the tasks needed for development and production builds and provides best practices for structuring your angularjs apps.

***

## Quick Start

Install Node.js and then:

```sh
$ git clone git@github.com:uxman-sherwani/ng-boilerplate.git
$ cd ng-boilerplate
$ sudo npm -g install gulp jshint bower
$ npm install
$ bower install
$ gulp
```

Then, open `file:ng-boilerplate/tmp/index.html` in your browser. That's all you need to start adding code for your angularjs application.

### Directory Structure

```
ng-boilerplate
  > app
    > fonts
    > images
    > styles
    > scripts
      > components
      - app.js
      - routes.js
    > gulp
      > tasks
      - config.js
      - event-handler.js
    - bower.json
    - gulpfile.js
    - package.json
```
