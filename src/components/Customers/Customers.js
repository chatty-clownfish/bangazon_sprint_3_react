import React, { Component } from 'react'


export default class Customers extends Component {
    componentDidMount() {
        this.props.getAll("customer")
    }

    render() {
        const customer = this.props.customers.map((customer)=>{
        return(<li>{customer.first_name} {customer.last_name}</li>)
        })
    return (
        <div>
            <h1> Customers </h1>
            <ul>
                {customer}
            </ul>
        </div>
    )}}