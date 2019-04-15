import React, { Component } from 'react';
import Moment from 'react-moment';
import './App.css';

class OrderTable extends Component {

    constructor(){
        super();
        this.state = {
            orders: []
        };
    }

    componentDidMount() {
        fetch('http://192.168.88.68:8080/orders')
        .then(results => {
            return results.json();
        }).then(data => {
            this.setState({orders: data});
            console.log("state", this.state.orders);
        })
    }

    render() {
        return (
        <div className="App">
            <div className="rTable">
                <div className="rTableRow">
                    <div className="rTableHead">OrderID</div>
                    <div className="rTableHead">CustomerID</div>
                    <div className="rTableHead">Order date</div>
                    <div className="rTableHead">Shipping date</div>
                </div>
                {this.state.orders.map(function(item, key) {             
                    return (
                        <div className="rTableRow" key = {key}>
                            <div className="rTableCell">{item.orderID}</div>
                            <div className="rTableCell">{item.customerID}</div>
                            <div className="rTableCell">
                                <Moment format="YYYY-MM-DD">{item.orderDate}</Moment>
                            </div>
                            <div className="rTableCell">{item.shippedDate}</div>
                        </div>
                    )})}
            </div>
        </div>
        );
    }
    }

export default OrderTable;
