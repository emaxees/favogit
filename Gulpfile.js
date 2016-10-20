var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('lite-server');

gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'))
});

//Watch task
gulp.task('default', function() {
    gulp.watch('sass/**/*.scss', ['styles']);
});


gulp.task('run-server', function() {
    browserSync.init({
        notify: false,
        port: 8081,
        server: {
            baseDir: ["test", "app"],
            routes: {
                '/bower_components': 'bower_components'
            }
        }
    });

    gulp.watch(['app/**/*.*'])
        .on('change', browserSync.reload);
});
