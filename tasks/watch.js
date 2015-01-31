var gulp = require('gulp'),
	$ = require('gulp-load-plugins')(); // автоматическая загрузка плагинов gulp
gulp.task('watch', ['templates'], function() {
	// при изменении любых файлов с расширением jade в папке src запускается задача templates, аналогично для js и scss файлов в соответствующих папках
	gulp.watch('src/**/*.jade', ['templates']);
});