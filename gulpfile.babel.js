'use strict';

import gulp from 'gulp';
import del from 'del';
import runSequence from 'run-sequence';
import browserSync from 'browser-sync';
import browserify from 'browserify';
import watchify from 'watchify';
import assign from 'lodash.assign';
import gulpLoadPlugins from 'gulp-load-plugins';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

const sourceDir = 'src/main/javascript/';
const destDir = 'src/main/resources/static/dist/';
const productDir = 'bin/static/dist/';

// Lint JavaScript
gulp.task('lint', () => gulp.src(sourceDir + '**.js')
  .pipe($.eslint())
  .pipe($.eslint.format())
  .pipe($.if(!browserSync.active, $.eslint.failOnError()))
);

var bundle = (b) => {
  return b.bundle()
    // log errors if they happen
    .on('error', $.util.log.bind($.util, 'Browserify Error'))
    .pipe(source('bundle.js'))
    // optional, remove if you don't need to buffer file contents
    .pipe(buffer())
    .pipe(gulp.dest(destDir))
    .pipe(gulp.dest(productDir))
    .pipe(reload({
      stream: true,
      once: true
    }));
};

// Concatenate and minify JavaScript. Optionally transpiles ES2015 code to ES5.
// to enables ES2015 support remove the line `"only": "gulpfile.babel.js",` in the
// `.babelrc` file.
gulp.task('build', () => {
  // add custom browserify options here
  var opts = {
    entries: [sourceDir + 'main.js']
  };
  var b = browserify(opts);

  b.on('log', $.util.log); // output build logs to terminal
  return bundle(b);
});

gulp.task('watch', ['clean'], () => {
  // add custom browserify options here
  var customOpts = {
    entries: [sourceDir + 'main.js'],
    debug: true
  };
  var opts = assign({}, watchify.args, customOpts);
  var bundler = watchify(browserify(opts));

  bundler.on('update', () => bundle(bundler)); // on any dep update, runs the bundler
  bundler.on('log', $.util.log); // output build logs to terminal
  return bundle(bundler);
});

// Clean output directory
gulp.task('clean', () => del(['dist/*'], {
  dot: true
}));

// Watch files for changes & reload
gulp.task('serve', ['watch'], () => {
  browserSync({
    notify: false,
    // Customize the Browsersync console logging prefix
    logPrefix: 'WSK',
    // Allow scroll syncing across breakpoints
    scrollElementMapping: ['main'],
    // Run as an https by uncommenting 'https: true'
    // Note: this uses an unsigned certificate which on first access
    //       will present a certificate warning in the browser.
    // https: true,
    // server: ['./'],
    proxy: 'localhost:8080',
    port: 3000

  });

  gulp.watch([sourceDir + '**.js'], ['lint']);
});

// Build production files, the default task
gulp.task('default', ['clean'], cb => runSequence(
  ['lint', 'html', 'build'],
  cb
)
);
