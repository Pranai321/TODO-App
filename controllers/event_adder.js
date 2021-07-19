const eventNames=require('../models/events');

module.exports.event=function(req,res){
    // console.log(req.body);
    eventNames.create({
        description:req.body.description,
        category:req.body.category,
        date:req.body.date
    });
   return res.redirect('back');
}