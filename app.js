const express = require('express');
const orgRouter = require('./routes/orgs.js'); //requires the router file
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use((req, res, next) => {
  // middleware: logger - says type of req received in terminal
  console.log(`${req.method} request received to ${req.url}`);
  next();
});

app.use(express.json()); // grabs the body of each request and does .json() on it to parse it into

app.use(cors()); //cors middleware

app.use(orgRouter); //initializes the orgRouter

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
