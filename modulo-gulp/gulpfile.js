const gulp = require('gulp');
//const sass = require('gulp-sass')(require('sass'));
const sass = require('gulp-dart-sass');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');
const {deleteAsync} = require('del');


function funcaoPadrao(callback){
    setTimeout(function() {
        console.log("Executando via gulp");
        callback();
    }, 2000)
}

function dizOi(callback){
    setTimeout(function() {
        console.log("Olá gulp");
        dizTchau();
        callback();
    }, 1000);
}

function dizTchau(callback){
    setTimeout(function(){
        console.log('Tchau gulp');
    }, 2000);
}

function compilaSass() {
    return gulp.src('./source/styles/main.scss')
    .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed' }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'));
}

function comprimeImagem() {
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'));
}

function comprimeJavaScript() {
    gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest('./build/scripts'));
}

function apagaBuild() {
    return deleteAsync(['./build']);
}

exports.default = gulp.series(
    funcaoPadrao,
    dizOi,
    function(){
        gulp.watch('./source/styles/main.scss', { ignoreInitial: false}, gulp.series(compilaSass));
        gulp.watch('./source/images/*', { ignoreInitial: false}, gulp.series(comprimeImagem));
        gulp.watch('./source/scripts/*.js', { ignoreInitial: false}, gulp.series(comprimeJavaScript));
    }
);

exports.apagaBuild = apagaBuild;
