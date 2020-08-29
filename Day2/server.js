var express = require("express");
var app = express();
var data = require("./data/heroes.json");

app.get("/", function(req, res){
    res.sendFile(__dirname+"/step5-ajax.html");
});
app.get("/data", function(req, res){
    res.send(data);
});

app.listen(5050,"localhost",function(error){
    if(error){
        console.log("Error is : "+error)
    }else{
        console.log("server is now running on localhost:5050");
    }
})  