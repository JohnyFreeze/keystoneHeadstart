/**
 * Grunt config file
 */

module.exports = function (grunt) {

	grunt.file.defaultEncoding = 'utf8';
	grunt.file.preserveBOM = false;

	grunt.initConfig({

		// minify own JS script
		uglify: {
			my_target: {
				files: {
					'public/js/concat.min.js': ['public/js/concat.js'],
				}
			}
		},

		// concatenate JS libs
		concat: {
			options: {
				separator: ';'
			},
			dist: {
				src: ['js/deps/*', 'js/vendor/*', 'js/vendor-2/*', 'js/lib/*', 'js/main.js'
				],
				//dest: 'js/concat.js'
				dest: 'public/js/concat.js'
			}
		},

		// minify and concatenate CSS libs
		cssmin: {
			combine: {
				files: {
					'public/css/main.min.css': ['public/css/main.css']
				}
			}
		},

		// compile less files to css
		less: {
			development: {
				options: {
					//paths: ["../ks/public/css"]
					paths: ["public/css"]
//                    cleancss: true
				},
				files: {
					"public/css/main.css": "less/main.less",
					//"../keystone/public/css/main.css": "less/main.less"
				}
			}
		},

		// watch for changes and trigger commands
		watch: {
			server: {
				files: ['.rebooted'],
				options: {
					livereload: true
				}
			},
			html: {
				options: {
					livereload: true
				},
				files: ['templates/**']
			},
			concat: {
				options: {
					livereload: true
				},
				files: ['js/lib/*', 'js/vendor/*', 'js/main.js'],
				tasks: ['concat']
			},
			less: {
				options: {
					livereload: true
				},
				files: ['less/lib/**', 'less/my/**', 'less/main.less', 'less/styles/**'],
				tasks: ['less']
			}
		},
		concurrent: {
			dev: {
				tasks: ['nodemon', 'watch'],
				options: {
					logConcurrentOutput: true
				}
			}
		},
		nodemon: {
			dev: {
				script: 'keystone.js',
				watch: ['routes', 'templates'],
				options: {
					callback: function (nodemon) {
						nodemon.on('log', function (event) {
							console.log(event.colour);
						});

						// opens browser on initial server start
						nodemon.on('config:update', function () {
							// Delay before server listens on port
							setTimeout(function () {
								require('open')('http://localhost:3001');
							}, 100);
						});

						// refreshes browser when server reboots
						nodemon.on('restart', function () {
							// Delay before server listens on port
							console.log('restarting...')
							setTimeout(function () {
								require('fs').writeFileSync('.rebooted', 'rebooted');
							}, 100);
						});
					}
				}
			}
		},
		//injecting css and js in default layout
		injector: {
			options: {
				ignorePath: 'public' //remove public path from every included file!
			},
			dev: {
				files: {
					'templates/views/layouts/default.hbs': [
						'public/js/build-helpers/live-reload.js',
						'public/js/concat.js',
						'public/css/main.css'
					]
				}
			},
			production: {
				files: {
					'templates/views/layouts/default.hbs': [
						'public/js/concat.min.js',
						'public/css/main.min.css'
					]
				}
			}
		}


	});

	// load npm tasks
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-nodemon');
	grunt.loadNpmTasks('grunt-concurrent');
	grunt.loadNpmTasks('grunt-inject');
	grunt.loadNpmTasks('grunt-injector');


	// define taskks
	//grunt.registerTask('default', ["browserSync", "cssmin", "less", "uglify", "concat", "watch"]);
	grunt.registerTask('default', ["less", "concat", "injector:dev", "concurrent:dev"]);
	grunt.registerTask('production', ["less", "cssmin", "concat", "uglify", "injector:production", "concurrent"]);

};
