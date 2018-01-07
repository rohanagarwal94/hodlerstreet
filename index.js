var exec = require('child_process').exec;

var port = process.env.PORT || 4000;
var hexoServerProcess = exec("hexo server -p " + port);

hexoServerProcess.stdout.on('data', function(data) {
    console.log(data.toString()); 
});