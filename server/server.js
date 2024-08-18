const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

let customers = [];

// Endpoint to get customer data
app.get('/api/customers', (req, res) => {
  res.json(customers);
});

// Endpoint to post customer data
app.post('/api/customers', (req, res) => {
  const customer = req.body;
  if (!customer) {
    return res.status(400).send('No customer data provided');
  }
  customers.push(customer);
  res.status(201).send('Customer data added');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
