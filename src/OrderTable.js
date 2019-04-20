import React, { Component } from 'react';
import Moment from 'react-moment';
import './App.css';
import settings from './properties/settings.json';

class OrderTable extends Component {

    constructor(){
        super();
        this.state = {
            orders: [],
            search: ''
        };
        this.orders_url = settings.api_url + ':' + settings.api_port + '/orders';  
    }

    componentDidMount() {
        fetch(this.orders_url)
        .then(results => {
            return results.json();
        }).then(data => {
            this.setState({orders: data});
            console.log("state", this.state.orders);
        })
    }

    updateSearch(event){
        this.setState({search: event.target.value});
    }

    render() {
        let filteredOrders = this.state.orders.filter(
            (item) => { 
                return item.customerID.indexOf(this.state.search) !== -1;
            } 
        );
        return (
        <div className="App">
            <div id="search-div">
                <label htmlFor="customer-search">Search customer</label>
                <input id="customer-search" type="text" value={this.state.search}  onChange={this.updateSearch.bind(this)}/>
            </div>
            <div className="rTable">
                <div className="rTableRow">
                    <div className="rTableHead">OrderID</div>
                    <div className="rTableHead">CustomerID</div>
                    <div className="rTableHead">Order date</div>
                    <div className="rTableHead">Shipping date</div>
                </div>
                {filteredOrders.map(function(item, key) {             
                    return (
                        <div className="rTableRow" key = {key}>
                            <div className="rTableCell">{item.orderID}</div>
                            <div className="rTableCell">{item.customerID}</div>
                            <div className="rTableCell">
                                <Moment format="YYYY-MM-DD">{item.orderDate}</Moment>
                            </div>
                            <div className="rTableCell">
                                <Moment format="YYYY-MM-DD">{item.shippedDate}</Moment>
                            </div>
                        </div>
                    )})}
            </div>
        </div>
        );
    }
    }

export default OrderTable;
