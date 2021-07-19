//importing the schema
const event=require('../models/events');

//remove the events from the database
module.exports.remove_event=function(req,res){
        event.findByIdAndDelete(req.body["id"],function(err){
            if(err){
                console.log("err");
                return;
            }
            return res.redirect('back');
        });
    
};