var express = require('express');
var gulp = require('gulp');
var dust = require('gulp-dust');

var app = express();

app.use('/', express.static('public'));



/**menu url**/

app.get('/datafile', function(request, response) {
    response.sendFile(__dirname + "/data/mock.json");
});


// app.get('/getlocation', function(request, response) {
//     console.log("125");
//     response.sendFile(__dirname + "/data/location.json");
// });



app.get('/fproduct', function(request, response) {
    var id = request.query.id;
    if (id == 1) {
        response.sendFile(__dirname + "/data/mydata.json");
    } else {
        response.sendFile(__dirname + "/data/mydata.json");
    }
});


//dust task

gulp.task('dust', function() {

    gulp.src('public/js/*.dust')
        .pipe(dust())
        .pipe(gulp.dest('public/js'));
});


//express

gulp.task('express', function() {
    var server = app.listen(3000, function() {
        console.log("server started at port 3000")
    });
});


// test task
gulp.task('test', function() {
    console.log("testing gulp task");

});



//watch task
gulp.task('watch', function() {
    gulp.watch('public/js/*.dust', function() {
        gulp.run('dust');
    });
});

gulp.task('default', ['dust', 'watch', 'express']);
