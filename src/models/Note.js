// Steps for defining a model

// 1. Define the schema like this: for a 
        // Note :  userid
        //  id , title, content, createdAt, updatedAt


// 2.Create a model using the schema <Model Name> <Schema> Note

const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
        id : {type : String,
                required : true,
                unique : true,
        },
        userid : {
                type : String,
                required : true,
        },
        title : {
                type : String,
                required : true,
        },
        content : {
                type : String,
        },
        dateAdded : {
                type : Date,
                default : Date.now,
        }
});

abc = mongoose.model("Note" , noteSchema);

module.exports = abc;