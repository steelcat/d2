var gulp = require('gulp'),
	connect = require('gulp-connect'),
	livereload = require('gulp-livereload');
gulp.task('server', function() {
	connect.server({
		port: 8000,
		root: 'public'
	});
	livereload.listen();
	gulp.watch('public/*.html').on('change', livereload.changed);
});