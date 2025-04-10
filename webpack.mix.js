// webpack.mix.js

let mix = require('laravel-mix');
const local = 'http://';

mix.js('src/js/app.js', 'js')
    .sass('src/scss/style.scss', 'css')
    .setPublicPath('dist')
    .options({
        processCssUrls: false,
        postCss: [
            require('tailwindcss')
        ],
    })
    .browserSync({
        proxy: local,
        injectChanges: true,
        port: 8001,
        files: [
            './dist/css/*.css',
            './dist/js/*.js',
        ],
    })
    .autoload({
        jquery: ['$', 'window.jQuery']
    })
    .version();