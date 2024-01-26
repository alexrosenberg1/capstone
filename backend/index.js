const express = require('express');
const app = express();

app.listen(3000, ()=>{
    console.log('The server is running');
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));


app.get('/', (req, res)=>{
    res.send('hello world');
});



