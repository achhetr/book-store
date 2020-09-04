const express = require('express');


const books = require('./routes/books');


const app  = express();

//middleware
app.use(express.json());

//routes
app.use('/api/books',books);
app.use('/',(req,res) => {
    res.send('Home Page');
})

app.listen(3000, () => console.log('Listening to port 3000...'));

