/**
 * Created by Mtui on 11/2/16.
 */
var gulp = require("gulp");
var concat = require("gulp-concat");

gulp.task("concat-controllers", function() {
    return gulp.src('./app/controllers/*.js')
        .pipe(concat('controllers.js'))
        .pipe(gulp.dest('./build'));
});

gulp.task("concat-services", function() {
    return gulp.src('./app/services/*.js')
        .pipe(concat('services.js'))
        .pipe(gulp.dest('./build'));
});

gulp.task("watch", ["concat-controllers"], function() {
    gulp.watch(['./app/controllers/*.js', './app/services/*.js'], ["concat-controllers", "concat-services"]);
})

gulp.task("default", ["concat-controllers", "concat-services", "watch"]);
