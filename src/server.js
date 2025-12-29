// Initialization

const express = require('express');
const app = express();

const mongoose = require('mongoose');
const Note = require("./models/Note");

// const body_parser = require("body-parser");
app.use(express.json());
app.use(express.urlencoded());
// app.use(body_parser.json());


const database_url = "mongodb+srv://ranjansubedi:ranjansubedi@cluster0.ud6gaz6.mongodb.net/?appName=Cluster0";

mongoose.connect(database_url).then(function(){
    // Home route (/)
    app.get("/",function(req,res){
        const response = { message : "Api fetched succcessfully !!",
            nested: {
                first : "hello",
                second : "world"
            },
        };
        res.json(response);
        // res.send("Hello World done mongoose connection");
    });


    const noteRouter  = require("./Routes/Note");
    app.use("/Note", noteRouter);
    

    app.get("/contact",function(req,res){
        req.send("From contact section of the website")
    });

});

// Starting the server on the mentioned server port
const PORT = process.env.PORT || 4000;
app.listen(PORT ,function(){
    console.log("server is running on port: "+PORT);
});
