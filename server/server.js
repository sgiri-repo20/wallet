const express = require('express');
const app = express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;

let Wallet = require('./wallet.model');

dotenv.config();

app.use(cors());
app.use(bodyParser.json());

// connect DB
mongoose.connect(process.env.dbURI, {useNewUrlParser: true}, () => {
    console.log('connected to DB')
})

// Route setup
const walletRoute = require('./wallet.router');
app.use('/wallet', walletRoute);

app.listen(PORT, function() {
    console.log('server up')
})