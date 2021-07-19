
const express=require('express');
const port=8000;
const router=require('./routes/index')

//connecting mongoose to mongodb
const db=require('./config/mongoose');
const events=require('./models/events');

//firing up the server
const app=express();


app.set('view engine','ejs');
app.set('views','./views');

//decrypting the req sent by the user/client
app.use(express.urlencoded());

//rerouting all the routers to routers folder
app.use('/',router);

//Setting up the static folder
app.use(express.static('./assets'));

//making server list to given port
app.listen(port,function(err){
    if(err){
        console.log("Failed to Load the server");
        return;
    }
    console.log("My express server is fired up and runningpm port",port);

})