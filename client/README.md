# Customer Information CRM Integration

## Overview

This project is a full-stack MERN (MongoDB, Express.js, React, Node.js) application that collects customer information, displays it in a grid, and integrates with a CRM system (Zoho CRM or alternative). It includes features to submit customer data and view it in a table.

## Features

- **Customer Information Input**: A React form to input customer details with validation.
- **Data Display**: Display submitted customer data in a grid format.
- **CSS Styles**: Professional and visually appealing styles for a user-friendly experience.

## Technologies

- **Frontend**: React, CSS
- **Backend**: Node.js, Express.js

## Getting Started

### Prerequisites

- Node.js and npm installed

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/KANIMOZHIKALIMUTHU/kmkk-customer-details
   cd customer-information

2. **Backend Setup**

   Navigate to the server directory and install dependencies: 
     cd server
     npm install

3. **Frontend Setup**

   Navigate to the client directory and install dependencies:
     cd ../client
     npm install

4. **Run the Application**    

   Start the backend server:
     cd server
     npm start
   Start the frontend application:
     cd ../client
     npm start
   The application should now be running at http://localhost:3000.

5. **Usage**
   
   Submit Customer Information
       Fill out the form with customer details.
       Click the "Submit" button to send data to the backend.
       The data will be displayed in a table below the form.