let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
let bodyparser = require("body-parser");
const e = require("express");

let app = express();
let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;

let Friend = mongoose.model("Friend", new Schema({
    id : ObjectId,
    username : String,
    usermail : String,
    userage : String
}));

// Middle Ware
app.use(cors());
app.use(bodyparser.json());
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://127.0.0.1:27017/",{ useNewUrlParser : true })
.then( () => {
    console.log("Mongo DB Connected")
}, (err) => {
    console.log("Error : ", error)
});


// READ
app.get("/", function(req, res){
    Friend.find( (error, friend) => {
        if(error){
            console.log("Error at reading : ", error)
        }else{
            res.send(friend);
        }
    })
})

// CREATE
app.post("/", function(req, res){

    let friend = new Friend(req.body);
    friend.save().then((nfriend) => {
        res.send(nfriend)
    }, (error)=>{
        console.log("Error : while creating", error)
    })
    
});

// Pre-UPDATE
app.post("/:friendid", function(req, res){
    Friend.findById( req.params.friendid, (error, friend) => {
        if(error){
            console.log("Error at reading : ", error)
        }else{
            friend.username  =  req.body.username;
            friend.usermail  =  req.body.usermail;
            friend.userage  =  req.body.userage;
            friend.save().then(
            (friend) => {
                res.send(friend)
            }, (error) => {
                console.log("Error at updating : ", error)
            })
        }
    })
})

// Post-UPDATE
app.post("/:friendid", function(req, res){
    Friend.findById( req.params.friendid, (error, friend) => {
        if(error){
            console.log("Error at reading : ", error)
        }else{
            res.send(friend);
        }
    })
})


// DELETE
app.get("/delete/:friendid", function(req, res){

    Friend.findByIdAndDelete( { _id : req.params.friendid }, (error, friend) => {
        if(error){
            console.log("Error at deleting : ", error)
        }else{
            res.send("Friend Deleted : ", friend);
        }
    })

})


app.listen(2525, function(error){
    if(error){
        console.log("Error : ", error)
    }else{
        console.log("server is now live and running on localhost:2525")
    }
})
