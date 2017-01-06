var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var autoprefix = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
var browserSync = require('browser-sync').create();
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
gulp.task('sass', function() {
	return gulp.src(['app/static/sass/**/*.scss', '!app/static/sass/**/_*.scss'])
	.pipe(sass({includePaths: ['./app/static/sass']}).on('error', sass.logError))
	.pipe(concat("screen.css"))
	.pipe(autoprefix('last 2 versions'))
	.pipe(gulp.dest('app/static/stylesheets'))
	.pipe(browserSync.stream())
	.pipe(gutil.env.type === 'dist' ? cssnano() : gutil.noop())
	.pipe(gutil.env.type === 'dist' ? gulp.dest('dist/static/stylesheets') : gutil.noop());
});
gulp.task('js', function() {
	return gulp.src('app/static/js/**/*.js')
	.pipe(jshint())
	.pipe(jshint.reporter('jshint-stylish'))
	.pipe(concat('bundle.js'))
	.pipe(gulp.dest('app/static/js'))
	.pipe(gutil.env.type === 'dist' ? uglify() : gutil.noop())
	.pipe(gutil.env.type === 'dist' ? gulp.dest('dist/static/js') : gutil.noop());
});
gulp.task('html', function() {
	return gulp.src(['app/*.html', 'app/includes/*.html', 'app/views/**/*.html'], {
		base: 'app'
	})
	.pipe(gutil.env.type === 'dist' ? gulp.dest('dist') : gutil.noop());
});
// gulp.task('fonts', function() {
// 	return gulp.src('app/static/fonts/**/*', {
// 		base: 'app'
// 	})
// 	.pipe(gutil.env.type === 'dist' ? gulp.dest('dist') : gutil.noop());
// });
// gulp.task('images', function() {
// 	return gulp.src('app/static/images/**/*', {
// 		base: 'app'
// 	})
// 	.pipe(gutil.env.type === 'dist' ? imagemin({
// 		progressive: true,
// 		use: [pngquant()]
// 	}) : gutil.noop())
// 	.pipe(gutil.env.type === 'dist' ? gulp.dest('dist') : gutil.noop());
// });
gulp.task('serve', ['sass'], function() {
	browserSync.init({
		server:"./"
	});
	gulp.watch("app/static/sass/**/*.scss", ['sass']);
	gulp.watch("app/static/js/**/*.js").on('change', browserSync.reload);
	// gulp.watch("app/static/js/**/*.js", ['js']).on('change', browserSync.reload);
	gulp.watch("app/**/*.html", ['html']).on('change', browserSync.reload);
	// gulp.watch("app/static/fonts/**/*", ['fonts']);
	// gulp.watch("app/static/images/**/*", ['images']);
});
gulp.task('default', ['serve']);