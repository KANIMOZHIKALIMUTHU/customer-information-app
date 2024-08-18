// src/App.js
import React, { useState } from 'react';
import CustomerForm from './components/CustomerForm';
import CustomerGrid from './components/CustomerGrid';
import axios from 'axios';

const App = () => {
  const [customers, setCustomers] = useState([]);

  const fetchCustomers = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/customers`);
      setCustomers(response.data);
    } catch (error) {
      console.error('Error fetching customers:', error);
    }
  };

  return (
    <div>
      <h1>Customer Management</h1>
      <CustomerForm setCustomers={setCustomers} fetchCustomers={fetchCustomers} />
      <CustomerGrid customers={customers} />
    </div>
  );
};

export default App;
