const gulp = require('gulp');
const watch = require('gulp-watch');
const babel = require('gulp-babel');
const config = require('./config');

/**
 * 开发环境
 */
gulp.task('dev', function () {
	return watch(config.gulp.entry, {
		ignoreInitial: false
	}, function () {
		console.log('编译成功🐂🍺~~~')
		gulp.src(config.gulp.entry)
			.pipe(babel({
				babelrc: false,
				plugins: ["transform-es2015-modules-commonjs"]
			}))
			.pipe(gulp.dest('dist'))
	});
})


let build = gulp.series(['dev'])

gulp.task('default', build);