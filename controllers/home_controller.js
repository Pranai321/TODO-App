const  events  = require("../models/events");

module.exports.home=function(req,res){
    events.find({},function(err,events_list){
        if(err){
            console.log("error in home_controller");
            return;
        }
        return res.render('home',{
           events:events_list
           });
    });
}