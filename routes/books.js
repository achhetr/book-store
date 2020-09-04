const express = require('express');


const bookStore = require('../models/book');

const route = express.Router();

route.get('/', (req,res) => {
    res.send(bookStore);
})

route.post('/', (req,res) => {
    if(!req.body.name) return res.status(400).send('No book received');

    bookStore.push({id: bookStore.length + 1, name: req.body.name});
    res.send('Book Added');
})

route.put('/:id', (req,res) => {
    if(!req.body.name) return res.status(400).send('No book received');

    const index = bookStore.findIndex((book) => book.id === parseInt(req.params.id));

    console.log(index);
    
    if(index < 0) return res.status(400).send('Id does not exists');

    bookStore[index] = {id: req.params.id, name: req.body.name}
    
    res.send('Book Updated');
})

route.delete('/:id', (req,res) => {
    const index = bookStore.findIndex((book) => book.id === parseInt(req.params.id));

    if(index < 0) return res.status(400).send('Id does not exists');

    bookStore.splice(index,1);

    res.send('Book Deleted');
})

route.get('/:id', (req,res) => {
    const index = bookStore.findIndex((book) => book.id === parseInt(req.params.id));

    if(index < 0) return res.status(400).send('Id does not exists');
    
    res.send(bookStore[index]);
})


module.exports = route;