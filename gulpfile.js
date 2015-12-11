var gulp = require('gulp');
var bower = require('gulp-bower');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifyCss = require('gulp-minify-css');
var webserver = require('gulp-webserver');
var sass = require('gulp-sass');

gulp.task('bower', function() {
  return bower()
    .pipe(gulp.dest('dist'))
});

gulp.task('js', function() {
    return gulp.src('src/*.js')
        .pipe(concat('bjax.js'))
        .pipe(uglify())
        .pipe(rename('bjax.min.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('css', function() {
    return gulp.src('src/*.css')
        .pipe(concat('bjax.css'))
        .pipe(minifyCss())
        .pipe(rename('bjax.min.css'))
        .pipe(gulp.dest('dist'));
});

gulp.task('sass', function() {
    return gulp.src('src/*.scss')
        .pipe(concat('bjax.css'))
        .pipe(sass())
        .pipe(minifyCss())
        .pipe(rename('bjax.min.css'))
        .pipe(gulp.dest('dist'));
});

gulp.task('demo', function() {
    return gulp.src('src/demo/*')
        .pipe(gulp.dest('dist/demo'));
});

gulp.task('watch', function() {
    gulp.watch('src/*.js', ['js']);
    gulp.watch('src/*.css', ['sass']);
    gulp.watch('src/demo/*', ['demo']);
});

gulp.task('webserver', function() {
  gulp.src('')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});

gulp.task('default', ['bower', 'js', 'sass', 'demo', 'webserver', 'watch']);
