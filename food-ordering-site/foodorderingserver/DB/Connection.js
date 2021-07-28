const mongoose = require('mongoose');


const URI = "mongodb+srv://user-123:ash25111998@mini-moon-tut.nglsc.mongodb.net/foodorder?retryWrites=true&w=majority";


const connectDB = async () => {
    await mongoose.connect(URI, 
        {
            useUnifiedTopology: true ,  
            useNewUrlParser: true
        });
        
        console.log('db connected!!!....');
};


module.exports= connectDB;




