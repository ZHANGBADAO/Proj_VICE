var gulp=require("gulp");
var uglify=require("gulp-uglify");
var minifycss=require("gulp-minify-css");

gulp.task("YaSuo_js",function(){
	gulp.src(["js/*.js","!js/jquery-1.8.3.min.js"])
	.pipe(uglify())
	.pipe(gulp.dest("D:/phpStudy/WWW/zxt/Proj_VICE/js"));
});
gulp.task("YaSuo_css",function(){
	gulp.src("css/*.css")
	.pipe(minifycss())
	.pipe(gulp.dest("D:/phpStudy/WWW/zxt/Proj_VICE/css"));
});

