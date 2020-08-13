const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(morgan('tiny'));

app.get('/api', (req, res) => {
  const data {
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
})