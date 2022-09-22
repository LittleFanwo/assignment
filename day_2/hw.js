const express = require('express');
const app = express();
const port = 3000;

app.get('/' , (req , res) => {
    res.send('<h1>You can go home by /home</h1>');
});

app.get('/home' , (req , res) => {
    res.send('<h1>Welcome from Home Section</h1>');
});

app.get('/about_us' , (req , res) => {
    res.send('<h1>About us</h1>');
});

app.get('/little_falcon' , (req , res) => {
    res.send('<h1>I am little falcon</h1>');
});

app.get('/team' , (req , res) => {
    res.send('<h1>Welcome from Team Section.</h1>');
});

app.listen(port);
