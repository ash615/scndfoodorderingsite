const express = require('express');
// All properties and Methods of Express in app variable
const app = express();
const connectDB = require('./DB/Connection'); 
const port = process.env.Port || 5000;

connectDB();

app.use(express.json({extended: false}));

app.use('/foodordering/add', require('./foodordering/Item'));

app.use('/foodordering/getAll', require('./foodordering/itemread'));

app.post('/', (req,res)=>{
  res.send("Hello from Server!!!");
});


app.listen(port, ()=>{
    console.log(`Server running at Port ${port}`);
});


