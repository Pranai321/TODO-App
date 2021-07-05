const express=require('express');
const port=8000;
const router=require('./routes/index')
const app=express();

app.set('view engine','ejs');
app.set('views','./views');
app.use('/',router);
app.use(express.static('./assets'));

app.listen(port,function(err){
    if(err){
        console.log("Failed to Load the server");
        return;
    }
    console.log("My express server is fired up and runningpm port",port);

})