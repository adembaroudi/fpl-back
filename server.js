const express = require("express");
const bodyParser = require("body-parser");
const db = require("./database/db");
const login = require('./Api/login');
const register = require('./Api/register');
const sujet =require('./Api/sujet');
const YesOrNo = require('./Api/YesOrNo');
const votemax = require('./votemax');
const cors = require('cors');
require ('./passport');
var http = require('http');
var path = require('path');
const app = express();
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));
app.use(cors()); 
app.use('/login',login);
app.use('/register',register);
app.use('/sujet',sujet);
app.use('/yesorno',YesOrNo);


app.listen(3000);