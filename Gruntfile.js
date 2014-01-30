
module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        options: {
          // cssmin will minify later
          style: 'expanded'
        },
        files: {
          'css/style.css': 'css/style.scss'
        }
      }
    },

    autoprefixer: {
      options: {
        browsers: ['last 1 version', '> 5%', 'ie 8', 'ie 7']
      },
      multiple_files: {
        expand: true,
        flatten: true,
        src: 'css/style.css',
        dest: 'css/build/prefixed/'
      }
    },

    cssmin: {
      combine: {
        files: {
              'css/build/style.min.css': ['css/build/prefixed/style.css']
        }
      }
    },

    jshint: {
      beforeconcat: ['js/functions.js']
    },

    concat: {
      production: {
        src: [
          'js/plugins/*.js',
          'js/functions.js'
        ],
        dest: 'js/build/production.js',
      },
      polyfill: {
        src: [
          'js/pollyfills/*.js'
        ],
        dest: 'js/build/polyfill.js',
      }
    },

    uglify: {
      production: {
        src: 'js/build/production.js',
        dest: 'js/build/production.min.js'
      },
      polyfill: {
        src: 'js/build/polyfill.js',
        dest: 'js/build/polyfill.min.js'
      }
    },

    watch: {
      options: {
        livereload: true,
      },
      scripts: {
        files: ['js/*.js'],
        tasks: ['concat', 'uglify', 'jshint'],
        options: {
          spawn: false,
        }
      },
      css: {
        files: ['css/*.scss'],
        tasks: ['sass', 'autoprefixer', 'cssmin'],
        options: {
          spawn: false,
        }
      },
    },

  });

  require('load-grunt-tasks')(grunt);

  // Default Task is basically a rebuild
  grunt.registerTask('default', ['concat', 'uglify', 'sass']);

  grunt.registerTask('dev', ['watch']);

};