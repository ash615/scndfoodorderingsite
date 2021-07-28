const express = require('express');
const mongoose = require('mongoose');
const Item = require('../DB/Item');
const route = express.Router();
const connectDB = require('../DB/Connection'); 

const URI = "mongodb+srv://user-123:ash25111998@mini-moon-tut.nglsc.mongodb.net/foodorder?retryWrites=true&w=majority";  

route.post('/', async(req,res) => {
    
    const{results} = req.body;
    let item = {};

    item.results = results;
    //item.subItemsData = subItemsData;
    //item.price =price;
    //item.description = description;
    
    let add = new Item(item);
    await add.save(item);
    // res.json({"result": "Success"});
    res.json(add);


    /*
    
    try{
    const{name, image, price, description} = req.body;
    let user = {};
    user.name = name;
    user.image = image;
    user.price = price;
    user.description = description;
    // let add;
    // let add = {};
    let add = new User(user);
        //res.send(getAll);
        await add.save(user);  
        res.json(add);
    } catch (error) {
        res.status(500).send(error);
     }

    // res.json(add);
    
    */

});


module.exports = route;