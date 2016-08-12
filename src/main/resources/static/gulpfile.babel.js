'use strict';

import path from 'path';
import gulp from 'gulp';
import del from 'del';
import runSequence from 'run-sequence';
import browserSync from 'browser-sync';
import browserify from 'browserify';
import watchify from 'watchify';
import assign from 'lodash.assign';
import swPrecache from 'sw-precache';
import gulpLoadPlugins from 'gulp-load-plugins';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import { output as pagespeed } from 'psi';
import pkg from './package.json';

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

// Lint JavaScript
gulp.task('lint', () => gulp.src('src/**/*.js')
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
    .pipe(gulp.dest('./dist/'))
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
    entries: ['src/main.js']
  };
  var b = browserify(opts);

  b.on('log', $.util.log); // output build logs to terminal
  return bundle(b);
});


gulp.task('watch', ['clean'], () => {
  // add custom browserify options here
  var customOpts = {
    entries: ['src/main.js'],
    debug: true
  };
  var opts = assign({}, watchify.args, customOpts);
  var watchify = watchify(browserify(opts));

  watchify.on('update', () => bundle(watchify)); // on any dep update, runs the bundler
  watchify.on('log', $.util.log); // output build logs to terminal
  return bundle(watchify);
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
    server: ['./'],
    proxy: 'localhost:8080',
    port: 3000

  });

  gulp.watch(['app/**/*.html'], reload);
  gulp.watch(['app/src/**/*.js'], ['lint']);
  gulp.watch(['app/images/**/*'], reload);
});

// Build production files, the default task
gulp.task('default', ['clean'], cb => runSequence(
  ['lint', 'html', 'build'],
  'generate-service-worker',
  cb
)
);
