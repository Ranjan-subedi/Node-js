const express = require('express');
const router = express.Router(); 
const Note = require('./../models/Note');
    
    // Add new Note to the Database
    router.post("/add" ,async function(req, res){
        // Update 
        await Note.deleteOne({id: req.body.id});

        var addNote = new Note({
            id : req.body.id,
            userid : req.body.userid,
            title : req.body.title,
            content : req.body.content
        });
        console.log("Note is being added.....");

        await addNote.save();
        console.log("Note is added");

        const response = {
            id : req.body.id,
            userid : req.body.userid,
            title : req.body.title,
            content : req.body.content,
            message : "New Note has been added !"+ `id : ${req.body.id}`,
            timeOfAdded : Date.now(),     
        };
        res.json(response);
    });
    
    // Show the notes from Databases
    router.post("/list",async function(req,res){
         var notes = await Note.find({userid : req.body.userid });
         console.log(notes);
         res.json(notes);
    });
    
    // Delete the Note
    router.post("/delete",async function(req,res){
        await Note.deleteOne({id : req.body.id});
        const response = {message: "Note has been deleted of id no ==>  "+`${req.body.id}` };
        res.json(response);
    });

    module.exports = router;