console.log( 'in server.js');


const express = require('express');
const bodyParser = require( 'body-parser');
const app = express();

app.use(express.static( 'server/public' ));
app.use( bodyParser.urlencoded({extended: true}));

const PORT = 5000;

app.listen( PORT, ()=>{
    console.log( 'server is up on:', PORT);
    
})