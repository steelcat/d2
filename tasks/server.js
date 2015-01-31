var gulp = require('gulp'),
	connect = require('gulp-connect');
gulp.task('server', ['watch'], function() {
	connect.server({
		port: 8000,
		root: 'public'
	});
});