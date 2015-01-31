var gulp = require('gulp'),
	$ = require('gulp-load-plugins')(); // автоматическая загрузка плагинов gulp
gulp.task('watch', [ 'templates', 'styles'], function() {
// при изменении любых файлов с расширением jade в папке src запускается задача templates, аналогично для js и scss файлов
	gulp.watch('src/**/*.jade', ['templates']);
	gulp.watch('src/**/*.scss', ['styles']);
});