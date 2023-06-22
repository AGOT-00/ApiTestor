const express = require('express');
const bodyParser = require('body-parser');
const dotenv =  require('dotenv');
dotenv.config();


const app = express();
app.use(bodyParser.json());

const dataStore = []; // JSON object to store received data

// Endpoint to receive data
app.post('/cinetpay', (req, res) => {
  const newData = req.body;
  dataStore.push(newData);
  res.sendStatus(200);
});

// Endpoint to retrieve all stored data
app.get('/getData', (req, res) => {
  res.json(dataStore);
});

console.log(process.env.PORT);

// Start the server
app.listen(process.env.PORT, () => {
  console.log('Server is running on port '+process.env.PORT);
});