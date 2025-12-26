// Initialization

const express = require('express');
const app = express();

const mongoose = require('mongoose');
const Note = require("./models/Note");

// const body_parser = require("body-parser");
app.use(express.json());
app.use(express.urlencoded({extended : false}));
// app.use(body_parser.json());




mongoose.connect("mongodb+srv://ranjansubedi:ranjansubedi@cluster0.ud6gaz6.mongodb.net/?appName=Cluster0").then(function(){
    
    // Home route (/)
    app.get("/",function(req,res){
        res.send("Hello World done mongoose connection");
    });

    // Add new Note to the Database
    app.post("/Notes/add" ,async function(req, res){

        // console.log("received data :",req.body);
        // res.json({
        //     message: "Sucess",
        //     received: req.body
        // });

        var addNote = new Note({
            id : req.body.id,
            userid : req.body.userid,
            title : req.body.title,
            content : req.body.content
        });

        await addNote.save();

        const response = {
            message : "New Note has been added !"+ `id : ${req.body.id}`,
            timeOfAdded : Date.now(),     
        };
        res.json(response);
    });
    
    // Show the notes from Databases
    app.get("/NotesList/:userid",async function(req,res){
         var notes = await Note.find({userid : req.params.userid });
         res.json(notes);
    });
    
    app.get("/about",function(req,res){
        res.send("About section");
    }); 
    
    app.get("/contact",function(req,res){
        req.send("Frrom contact section of the website")
    });

});

// Starting the server on the mentioned server port

app.listen(4000,function(){
    console.log("server is running on port 4000");
});
