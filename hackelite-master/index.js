var express = require('express');
var app = express();
var path = require('path');

app.use('/hackelite1.png',express.static(__dirname+'/hackerlite1.png'));
app.use('/css',express.static(__dirname +'/css'));
app.use('/scss',express.static(__dirname +'/scss'));
app.use('/js',express.static(__dirname +'/js'));
app.use('/img',express.static(__dirname +'/img'));
app.use('/vendor',express.static(__dirname +'/vendor'));

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8000);
