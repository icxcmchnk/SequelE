const
    gulp 		     = require('gulp'),
    less             = require('gulp-less'),
	sass			 = require('gulp-dart-sass'),
	postcss 		 = require('gulp-postcss'),
	bs 			     = require('browser-sync'),
	autoprefixer     = require('autoprefixer'),
    MQpacker 		 = require("css-mqpacker"),
    cssm             = require('gulp-clean-css'),
    imagemin 		 = require('gulp-imagemin'),
    queue            = require('streamqueue'),
    concat           = require('gulp-concat'),
    rename           = require('gulp-rename'),
    // nodeJs
    fs               = require('fs'),
    // plugins postcss
    plugins          = [autoprefixer(), MQpacker({sort: true})],
    // webpack
    webpack          = require('webpack'),
    webpackConfig    = require('./webpack.config.js');

function lessF(){
    return gulp.src('./src/less/index.less')
    .pipe(less())
    .pipe(postcss(plugins))
}

function scssF(){
    return gulp.src('./src/scss/index.scss')
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(postcss(plugins))
}

function webpackF(cb) {
    return new Promise((resolve, reject) => {
        webpack(webpackConfig, (err, stats) => {
            if (err) {
                return reject(err)
            }
            if (stats.hasErrors()) {
                return reject(new Error(stats.compilation.errors.join('\n')))
            }
            resolve()
        })
    })
}

async function compilation(){
    const cssmSettings = {
        level: {
            1: {
                all: true,
                normalizeUrls: false
            },
            2: {
                restructureRules: true
            }
        }
    },
        lessPathCh = fs.existsSync('./src/less/index.less'),
        scssPathCh = fs.existsSync('./src/scss/index.scss'),
        distFolder  = './src/css/';
    if(scssPathCh && lessPathCh){
        return await queue({ objectMode: true },
            scssF(),
            lessF(),
        )
        .pipe(concat('min-main.css'))
        .pipe(cssm(cssmSettings))
        .pipe(gulp.dest(distFolder))
        .pipe(bs.stream());
    } else if(scssPathCh){
        return await scssF()
        .pipe(rename({prefix: 'min-'}))
        .pipe(cssm(cssmSettings))
        .pipe(gulp.dest(distFolder))
        .pipe(bs.stream());
    } else if(lessPathCh){
        return await lessF()
        .pipe(rename({prefix: 'min-'}))
        .pipe(cssm(cssmSettings))
        .pipe(gulp.dest(distFolder))
        .pipe(bs.stream());
    }
}

async function imageminF(){
    return await gulp.src('./src/img/*')
    .pipe(imagemin([
        imagemin.gifsicle({interlaced: true}),
        imagemin.jpegtran({progressive: true}),
        imagemin.optipng({optimizationLevel: 5}),
        imagemin.svgo({
            plugins: [
                {removeViewBox: true},
                {cleanupIDs: false}
            ]
        })
    ]))
    .pipe(gulp.dest('./src/image-min/'));
}

function browserSync(){
    bs.init({
        proxy: 'sequele.com',
        port: 80,
        notify: false,
    });
    gulp.watch(['./src/less/*.less', './src/scss/*.scss'], compilation)
    gulp.watch('./**/*.html').on('change', bs.reload);
    gulp.watch('./src/js/**/*.js').on('change', bs.reload);
    gulp.watch('./src/php/**/*.php').on('change', bs.reload);
}

function browserSyncWp(){
    bs.init({
        proxy: 'sequele.com',
        port: 80,
        notify: false,
    });
    gulp.watch(['./src/less/*.less', './src/scss/*.scss']).on('change', webpackF);
    gulp.watch('./*.html').on('change', bs.reload);
    gulp.watch('./src/js/*.js').on('change', webpackF);
    gulp.watch('./*.php').on('change', bs.reload);
}

exports.default = gulp.series(compilation, browserSync);
exports.webpack = gulp.series(webpackF, browserSyncWp);