// src/components/CustomerGrid/index.js
import React from 'react';
import "./index.css"

const CustomerGrid = ({ customers = [] }) => {
  return (
    <div>
      <h2>Customer List</h2>
      <table>
        <thead>
          <tr>
            <th>Phone Number</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Organization</th>
          </tr>
        </thead>
        <tbody>
          {customers.length === 0 ? (
            <tr>
              <td colSpan="6">No customers found</td>
            </tr>
          ) : (
            customers.map((customer, index) => (
              <tr key={index}>
                <td>{customer.phoneNumber}</td>
                <td>{customer.firstName}</td>
                <td>{customer.lastName}</td>
                <td>{customer.email}</td>
                <td>{customer.address}</td>
                <td>{customer.organization}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerGrid;
