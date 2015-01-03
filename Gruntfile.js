module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      sass: {
        files: ['src/**/*.scss'],
        tasks: ['sass:build'],
        options: {
          livereload:1337
        }
      }
    },
    sass: {
      build: {
        options: {
          style: 'expanded',
          noCache:true
        },
        files: {
          './src/assets/css/style.css': './src/assets/scss/style.scss'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', [
    'watch'
  ]);
};