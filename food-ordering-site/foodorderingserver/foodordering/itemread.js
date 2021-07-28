const express = require('express');
const mongoose = require('mongoose');
const Item = require('../DB/Item');
const route = express.Router();

var http = require('http');  

const URI = "mongodb+srv://user-123:ash25111998@mini-moon-tut.nglsc.mongodb.net/foodorder?retryWrites=true&w=majority";  

route.post('/', async(req, res)=>{
   
      const getAll = await Item.find({});
    
      try {
        res.send(getAll);
      } catch (error) {
        response.status(500).send(error);
      }
});


module.exports = route;
