module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		sass: {
			options: {
				outputStyle: 'compressed',
				includePaths: ['inc/foundation/scss']
			},
			css: {
				files: {
					'css/logo.css': 'scss/logo.scss',
					'css/app.css': 'scss/app.scss',
					'css/naazgull.css': 'scss/naazgull.scss'
				}        
			}
		},

		concat : {
			js : {
				src : [ 'inc/<%=pkg.name %>/*.min.js' ],
				dest : 'inc/<%=pkg.name %>/all.js'
			},
			css : {
				src : [ 'inc/<%=pkg.name %>/normalize.min.css', 'inc/<%=pkg.name %>/logo.min.css', 'inc/<%=pkg.name %>/app.min.css', 'inc/<%=pkg.name %>/naazgull.min.css' ],
				dest : 'inc/<%=pkg.name %>/all.css'
			}
		},

		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
			},

			js: {
				files: {
					'inc/<%=pkg.name %>/app.min.js': 'js/app.js',
					'inc/<%=pkg.name %>/html5tags.min.js': 'js/html5tags.js',
					'inc/<%=pkg.name %>/naazgull.min.js': 'js/naazgull.js'
				}
			}
		},

		cssmin: {
			minify: {
				expand: true,
				cwd: 'css/',
				src: ['*.css', '!*.min.css'],
				dest: 'inc/<%=pkg.name %>/',
				ext: '.min.css'
			}
		},

		watch: {
			grunt: { files: ['Gruntfile.js'] },

			sass: {
				files: 'scss/**/*.scss',
				tasks: ['sass']
			},

			uglify: {
				files: 'js/**/*.js',
				tasks: ['uglify']
			},

			cssmin: {
				files: 'css/**/*.css',
				tasks: ['cssmin']
			},

			concat: {
				files: [ 'js/**/*.js', 'css/**/*.css' ],
				tasks: ['concat']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
    	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('build', ['sass', 'uglify', 'cssmin', 'concat']);
	grunt.registerTask('default', ['build','watch']);
};