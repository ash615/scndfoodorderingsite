const mongoose = require('mongoose');

const item = new mongoose.Schema({

    results:
    [{
        type: Object,
        name:{
            type: String,
        },
        image:{
            type: String,
        },
        subItemsData:{
            name:{
                type: String,
            },
            subItems:[{
                type: Object,
                name:{
                    type: String,
                },

            image:{
                type: String,
            },
            price:{
                type: Number,   
            },
            description:{
                type: String,
            }
        }]
    }

    }]
});


module.exports = Item = mongoose.model('item',item);

