const config = require('./config/config');
const connection = require('./connection/admin');
const user = require('./connection/user')
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const route = require('./route');
const server = require('http').createServer(app);
const env = require('dotenv');
env.config();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api', route);
server.listen(config.port, () => {
    console.log(`Running on port ${config.port}.`);
});
