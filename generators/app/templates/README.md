# <%= project_name %>
> <%= description %>

## installation
```shell
# public
npm i -g @<%= scope %>/<%= project_name %>
```

## usage
```js
"use strict";

var gulp = require("gulp");
var boilerplateGulpPlugin = require('<%= project_name %>');

gulp.task("task1", function() {
  return gulp
    .src("src/*.js")
    .pipe(boilerplateGulpPlugin("/* My Plugin*/\n"))
    .pipe(gulp.dest("dist"));
});

gulp.task("default", gulp.series(["task1"]));
```
