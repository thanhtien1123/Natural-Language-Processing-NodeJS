const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
let textapi = require('./aylienAPI');

//Middleware;
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.sendFile('dist/index.html')
})

app.get('/sentiment', textapi)

app.listen(3000, () => {
  console.log('Server started on 3000');
}) 