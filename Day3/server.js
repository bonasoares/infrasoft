var express = require("express");
var app = express();

app.use(express.static(__dirname));

app.get("/", function(req, res){
    res.sendFile(__dirname+"/step8-typescript.html");
});

app.listen(5050,"localhost",function(error){
    if(error){
        console.log("Error is : "+error)
    }else{
        console.log("server is now running on localhost:5050");
    }
});