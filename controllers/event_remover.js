const event=require('../models/events');

module.exports.remove_event=function(req,res){
    
    console.log(req.body);
    const id=req.body.id;  
    event.findByIdAndDelete(id,function(err){
        if(err){
            console.log("err");
            return;
        }
        return res.redirect('back');
    });
};