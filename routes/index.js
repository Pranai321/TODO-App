const express=require('express');
//import Router to control the routes and manipulate web pages and database
const router=express.Router();
const home_Controller=require('../controllers/home_controller');
const event=require('../controllers/event_adder');
const event_handler=require('../controllers/event_remover')

router.get('/',home_Controller.home);

router.post('/create_event',event.event);

router.post('/delete_event/',event_handler.remove_event);

module.exports=router;