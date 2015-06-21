module.exports = function(grunt) {
	grunt.initConfig({
		jshint: {
			all: ['Gruntfile.js','develop/scripts/**/*.js']
		},
		connect: {
			sever: {
				options : {
					port: 3000,
					base: 'exports'
				}
			}
		},
		jade: {
			compile: {
				options: {
					pretty: true
				},
				files: [{
					expand: true,
					cwd: 'develop',
					src: '*.jade',
					dest: 'exports',
					ext: '.html'
				},{
					expand: true,
					cwd: 'develop/scripts',
					src: '**/*.jade',
					dest: 'exports/templates',
					ext: '.html'
				}]
			}
		},
		stylus : {
			compile: {
				files: {"exports/css/style.css": ["develop/styl/*.styl", "develop/scripts/**/*.styl"]}
			}
		},
		browserify: {
			app: {
				files: {
					'exports/scripts/code.js' : ['develop/scripts/code.js']
				},
				options : {
					transform : ['debowerify']
				}
			}
		},

		clean: {
			build: ['exports']
		},

		copy: {
			js:{
				files : [{
					expand: true,
					cwd: 'develop/scripts/',
					src: '*.js',
					dest: 'exports/scripts'
				},{
					expand: true,
					cwd: 'develop/scripts/',
					src: '**/*.js',
					dest: 'exports/scripts'
				}]
			},
			others: {
				files: [
					{
						expand: true,
						cwd: 'develop/img',
						src: '*',
						dest: 'exports/img'
					},
					{
						expand: true,
						cwd: 'develop/media',
						src: '*',
						dest: 'exports/media'
					},
					{
						expand: true,
						cwd: 'develop/fonts',
						src: '*',
						dest: 'exports/fonts'
					}]
			}
		},
		watch: {
			js: {
				files: 'develop/scripts/**/*.js',
				tasks: 'copy:js'
				//tasks: 'browserify'
			},
			css: {
				files: ['develop/styl/*.styl', 'develop/scripts/**/*.styl'],
				tasks: 'stylus'
			},
			html: {
				files: ['develop/*.jade', 'develop/scripts/**/*.jade'],
				tasks: 'jade'
			},
			allFiles : {
				files: ['exports/scripts/*.js', 'exports/scripts/**/*.js', 'exports/css/*.css','exports/*.html','exports/templates/*.html'],
				options: {
					livereload: true
				}
			}
		},
		open: {
			dev : {
		      path: 'http://0.0.0.0:3000',
		      app: 'Google Chrome'
		    }
		}
	});

	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-open');
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-file-creator');


	grunt.registerTask('default', ['jshint', 'clean', 'copy:js', 'copy:others', 'jade', 'stylus', 'connect','open:dev','watch']);
	grunt.registerTask('deploy' , ['jshint', 'clean', 'browserify', 'copy:others', 'jade', 'stylus', 'connect','open:dev','watch']);


};
