const gulp = require('gulp')
const webServer = require('gulp-webserver')
const watch = require('gulp-watch')

function monitorarArquivos(callback){
    watch('src/**/*.html', () => gulp.series('appHTML')())
    watch('src/**/*.scss', () => gulp.series('appCSS')())
    watch('src/**/*.js', () => gulp.series('appJS')())
    watch('src/assets/imgs/**/*.*', () => gulp.series('appIMG')())

    return callback()
}

function server(){
    return gulp.src('build')
        .pipe(webServer({ 
            port: 8080,
            open: true,
            livereload: true
         }))
}

module.exports = {
    monitorarArquivos,
    server
}