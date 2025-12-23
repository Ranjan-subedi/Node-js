// Initialization

const express = require('express');
app = express();

const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://ranjansubedi:ranjansubedi@cluster0.ud6gaz6.mongodb.net/?appName=Cluster0").then(function(){
    
    // Home route (/)
    app.get("/",function(req,res){
        res.send("Hello World done mongoose connection");
    });
    
    app.get("/homepage",function(req,res){
        res.send("Homepage section");
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
