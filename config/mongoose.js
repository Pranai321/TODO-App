const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost/Todo_List_db");

const db=mongoose.connection;

db.on('error',console.error.bind(console,"Failed to load the database"));

db.once('open',function(){
    console.log("Connection with the database is set up successfully");
})
module.exports=db;
