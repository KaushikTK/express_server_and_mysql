const express = require('express');
const path = require('path'); // required for absolute path while rendering html pages
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();

app.use(express.static("public"));
//app.use(express.static("public/scripts"));
//app.use('./modeler');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()) ;
app.use(session({secret: 'ssshhhhh'})); // secret is necessary for managing sessions

let register = require('./modeler/register');
let login = require('./modeler/login');
let get_info = require('./modeler/get_info');

// do url routing
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public/registration.html'));
});

app.post('/register',(req,res)=>{
    register.register(req,res);
});

app.post('/login',(req,res)=>{
    login.login(req,res);
});

app.get('/get_mail',(req,res)=>{
    //const s = req.session;
    get_info.get_info(req,res);
})

// listen @ 3000
app.listen(3000,()=>{
    console.log('Listening at port 3000');
});


/*
inside any function, create a variable say 'sess' and assign it as req.session;
this sess is an object like our $_SESSION variable in php
we can set the name like:
    sess.name = 'Kaushik'; // this is same as $_SESSION['name'] = 'Kaushik';
*/
