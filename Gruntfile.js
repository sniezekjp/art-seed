module.exports = function(grunt) {
  
  var publicDir = grunt.file.readJSON('.artrc').src;
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      sass: {
        files: [publicDir+'/**/*.scss'],
        tasks: ['sass:build'],
        options: {
          livereload:1337
        }
      },
      typescript: {
        files: [publicDir+'/**/*.ts'],
        tasks: ['typescript:build']
      }
    },
    sass: {
      build: {
        options: {
          style: 'expanded',
          noCache:true
        },
        files: [{
          expand:true,
          cwd: './' + publicDir + '/assets/scss',
          src: ['*.scss'],
          dest: './'+publicDir+'/assets/css',
          ext: '.css'
        }]
      }
    },
    typescript: {
      build: {
        src: ['./'+publicDir+'/**/*.ts', '!./'+publicDir+'/vendor/**/*.ts'],
        options: {
          module: 'amd',
          target: 'es5',
          sourceMap: true,
          references: ['./defs/*.d.ts']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-typescript');

  grunt.registerTask('default', [
    'sass',
    'typescript',
    'watch'
  ]);
};