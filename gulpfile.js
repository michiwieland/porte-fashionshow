const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

const paths = {
    'bower' : './bower_components/',
    'assets' : './assets/'
}

gulp.task('default', ['html', 'styles', 'scripts', 'images']);

gulp.task('watch', function() {
    gulp.watch(paths.assets + '*.html', ['html']);
    gulp.watch(paths.assets + '*.scss', ['styles']);
    gulp.watch(paths.assets + '*.js', ['scripts']);
});

gulp.task('html', function(){
    return gulp.src([paths.assets + 'index.html'])
        .pipe(gulp.dest('./public/'));
});

gulp.task('styles', function(){
    return gulp.src([
        paths.bower + 'fullpage.js/dist/jquery.fullPage.css',
        paths.assets + 'style.scss'
    ])
    .pipe(sass())
    .pipe(concat('style.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./public/css/'));
});

gulp.task('scripts', function(){
    return gulp.src([
        paths.bower + 'jquery/dist/jquery.js',
        paths.bower + 'fullpage.js/dist/jquery.fullpage.js',
        paths.bower + 'fullpage.js/dist/jquery.fullpage.extensions.min.js',
        paths.assets + 'script.js'
    ])
    .pipe(uglify())
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('./public/js/'));
});

gulp.task('images', function(){
    return gulp.src([paths.assets + '/images/*'])
        .pipe(gulp.dest('./public/images/'));
});