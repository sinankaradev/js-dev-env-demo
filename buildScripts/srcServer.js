var express = require('express')
var path = require('path')
var open = require('open')
var chalk = require('chalk')

var port = 3000;
var app = new express();
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'../src/index.html'))    
})

app.listen(port, function(err){
    if (err) {
        console.error(err);
        
    } else {
        console.log('opeend');
        
        open('http://localhost:' + port);
    }
} )

