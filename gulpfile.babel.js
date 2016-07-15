'use strict';

import gulp from 'gulp';
import gutil from 'gulp-util';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import sass from 'gulp-sass';

const sassOpts = { outputStyle: 'compressed', errLogToConsole: true };

gulp.task('build', () => {
    return browserify({
        entries: './src/jsx/app.jsx',
        extensions: ['.jsx'],
        debug: true
    })
        .transform('babelify', {
            presets: ['es2015', 'react'],
            plugins: ['transform-class-properties']
        })
        .bundle()
        .on('error', function(err){
            gutil.log(gutil.colors.red.bold('[browserify error]'));
            gutil.log(err.message);
            this.emit('end');
        })
        .pipe(source('app.js'))
        .pipe(gulp.dest('build/js'));
});

gulp.task('scss',()=>{
    return gulp.src('src/scss/**/*.scss')
            .pipe(sass(sassOpts))
            .pipe(gulp.dest('build/css'));
});

gulp.task('watch', ['build','scss'], () => {
    gulp.watch('./src/jsx/**/*.jsx', ['build']);
    gulp.watch('./src/scss/**/*.scss', ['scss']);
});

gulp.task('default', ['watch']);