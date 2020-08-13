const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(morgan('tiny'));

app.get('/api', (req, res) => {
  const data = {
    firstName: 'testing',
    lastName: 'test',
    term1: 'term1',
    valuePayout1: 'valuePayout1',
    term2: 'term1',
    valuePayout2: 'valuePayout1',
    term3: 'term1',
    valuePayout3: 'valuePayout1',
    premium: 'premium'
  };
  res.json(data);
});

app.get('/api/RequestedInsurance1', (req, res) => {
  const data = {
    firstName: 'I need protection',
    lastName: 'Protect Me',
    term1: 'termA',
    valuePayout1: 'valuePayoutA',
    term2: 'termB',
    valuePayout2: 'valuePayoutB',
    term3: 'termC',
    valuePayout3: 'valuePayoutC',
    premium: 'Give me Free'
  };
  res.json(data);
});

app.listen(PORT, console.log(`Server is starting at ${PORT}`));