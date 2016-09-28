'use strict';

module.exports = function (grunt) {

  require('jit-grunt')(grunt, {});

  // Define the configuration
  grunt.initConfig({

    // Project settings
    bower: grunt.file.readJSON('bower.json'),

    clean: {
      src: ['dist']
    },

    copy: {
      files: {
        cwd: '.',
        src: [
          'index.html',
          'src/assets/**',
          'src/**/*.html',
          'src/*.html',
          'bower_components/angular/angular.min.js',
          'bower_components/angular/angular.min.js.map',                 // Include source-maps
          'bower_components/angular-spinner/angular-spinner.min.js',
          'bower_components/angular-spinner/angular-spinner.min.js.map', // Include source-maps
          'bower_components/bootstrap/dist/css/bootstrap.min.css',
          'bower_components/bootstrap/dist/css/bootstrap.min.css.map',   // Include source-maps
          'bower_components/angular-route/angular-route.min.js',
          'bower_components/angular-route/angular-route.min.js.map',     // Include source-maps
          'bower_components/angular-animate/angular-animate.min.js',
          'bower_components/angular-animate/angular-animate.min.js.map', // Include source-maps
          'bower_components/angular-aria/angular-aria.min.js',
          'bower_components/angular-aria/angular-aria.min.js.map',       // Include source-maps
          'bower_components/angular-material/angular-material.min.css',
          'bower_components/font-awesome/css/font-awesome.min.css',
          'bower_components/font-awesome/fonts/**',
          'bower_components/ace-builds/src-min-noconflict/ace.js',
          'bower_components/ace-builds/src-min-noconflict/ext*.js',
          'bower_components/ace-builds/src-min-noconflict/mode-json.js',
          'bower_components/ace-builds/src-min-noconflict/mode-batchfile.js',
          'bower_components/ace-builds/src-min-noconflict/theme-chrome.js',
          'bower_components/ace-builds/src-min-noconflict/worker-json.js',
          'bower_components/angular-ui-ace/ui-ace.min.js',
          'bower_components/spin.js/spin.min.js',
          'bower_components/angular-material/angular-material.min.js',
          // 'bower_components/angularUtils-pagination/dirPagination.js',
          'bower_components/angular-material-data-table/dist/md-data-table.min.css',
          'bower_components/angular-material-data-table/dist/md-data-table.min.js',

          'bower_components/angular-ui-grid/ui-grid.min.css',
          'bower_components/angular-ui-grid/ui-grid.min.js',
          'bower_components/angular-ui-grid/ui-grid.svg',
          'bower_components/angular-ui-grid/ui-grid.ttf',
          'bower_components/angular-ui-grid/ui-grid.woff',
          'bower_components/angular-base64/angular-base64.min.js',
          'bower_components/oboe/dist/oboe-browser.min.js',
          'bower_components/angular-oboe/dist/angular-oboe.min.js',
          'bower_components/angular-json-tree/dist/angular-json-tree.min.js',
          'bower_components/angular-json-tree/dist/angular-json-tree.css'

        ],
        dest: 'dist',
        expand: true
      }
    },

    concat: {
      dist: {
        src: ['src/*.js', 'src/factories/*.js', 'src/kafka-topics/**/*.controller.js'],
        dest: 'dist/combined.js'
      }
    },

    usemin: {
      html: ['dist/index.html']
    }

  });

  grunt.registerTask('default', [
    'clean',
    'copy',
    'concat',
    'usemin'
  ]);
};
