import React, { Component } from 'react';
import OrderTable from './OrderTable';
// import logo from './logo.svg';
import './App.css';

class Orders extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Order history for Company.com
          </h1>
          <OrderTable/>
        </header>
      </div>
    );
  }
}

export default Orders;
