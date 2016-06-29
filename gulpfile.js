var gulp = require('gulp');
var sass = require('gulp-sass');
var jsMinify = require('gulp-js-minify');
var browserify = require('gulp-browserify');
//var include = require('gulp-include');



gulp.task('default',['js','css']);

gulp.task('js',function(){
    var stream = gulp.src('src/js/app.js')
        .pipe(browserify())
        .pipe(gulp.dest('build/js'));
    return stream;    
});

gulp.task('css',function(){
    var stream = gulp.src('src/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('build/css'));
    return stream;
});

gulp.task('js-production',function(){
    var stream = gulp.src('src/js/app.js')
        .pipe(browserify())
        .pipe(jsMinify())
        .pipe(gulp.dest('build/js/app.min.js'));
});

gulp.task('watch-dev', function(){
    gulp.watch('src/js/**/*.js',['js']);
})