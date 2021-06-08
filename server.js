const express = require('express');
 const bodyParser = require('body-parser');
 const bcrypt = require('bcrypt-nodejs');
 const cors = require('cors');
 const knex = require('knex');

 const register = require('./controller/register');
 const signin = require('./controller/signin');
 const image = require('./controller/image');
 const profile = require('./controller/profile'); 

const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : '',
    password : '',
    database : 'smart-brain'
  }
})

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/signin',(req,res) => {signin.handleSignin(req, res, db, bcrypt)});
app.post('/register', (req,res) => { register.handleRegister(req, res, db, bcrypt)});
app.get('/profile/:id', (req,res) => {profile.handleProfile(req, res, db, bcrypt)});
app.put('/image', (req,res) => {image.handleImage(req, res, db, bcrypt)});

app.listen(3000);



