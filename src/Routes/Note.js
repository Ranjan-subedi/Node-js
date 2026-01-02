const express = require('express');
const router = express.Router(); 
const Note = require('./../models/Note');
    
    // Add new Note to the Database
    router.post("/add" ,async function(req, res){

        // Update 
        try {
            const note = await Note.findoneAndUpdate(
                {id: req.body.id},
                {
                    id : req.body.id,
                    userid : req.body.userid,
                    title : req.body.title,
                    content : req.body.content,
                    dateAdded: req.body.dateAdded
                },
                {new: true, upsert: true}
            )
        } catch (error) {
            res.status(500).json({message: "Error updating note", error: error.message});
        }

        // await Note.deleteOne({id: req.body.id});

        // var addNote = new Note({
        //     id : req.body.id,
        //     userid : req.body.userid,
        //     title : req.body.title,
        //     content : req.body.content
        // });
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
        try {
             var notes = await Note.find(
                {userid : req.body.userid}
            );
             console.log(notes);
             res.status(200).json(notes);
        } catch (error) {
            res.status(500).json({message: "Error fetching notes", error: error.message});
        }
        
         
         
    });
    
    // Delete the Note
    router.post("/delete",async function(req,res){
        try {
             await Note.deleteOne({id : req.body.id});
        const response = {message: "Note has been deleted of id no ==>  "+`${req.body.id}` };
        res.status(200).json(response);
        } catch (error) {
            res.status(500).json(
                {message: "Error deleting note", error: error.message});
        }
       
    });

    module.exports = router;