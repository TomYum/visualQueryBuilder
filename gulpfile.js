var gulp = require('gulp');

gulp.task('default',function(){
    
});

gulp.task('js',function(){
    var stream = gulp.src('src/js/**.js')
        .pipe(minify())
        .pipe(gulp.dest('js'));
    return stream;    
});