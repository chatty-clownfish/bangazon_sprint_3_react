import React, { Component } from 'react'

import { Route } from 'react-router-dom'
import NavBar from './navbar/navbar'

import Orders from './Orders/Orders'
import Employees from './Employees/Employees'
import ProductTypes from './ProductTypes/ProductTypes'
import Customers from './Customers/Customers'
import Products from './Products/Products'
import Trainings from './Trainings/Trainings'
import Computers from './Computers/Computers'
import Departments from './Departments/Departments'
import PaymentTypes from './PaymentTypes/PaymentTypes'
import Home from './home/home'

export default class ApplicationViews extends Component {

    state = {
        department: [],
        employee: [],
        producttype: [],
        paymenttype: [],
        customer: [],
        product: [],
        order: [],
        training: [],
        computer: [],
        apiUrl: 'http://127.0.0.1:8000/'
      }


    getAll = (resource, keyword=null) => {
        let url = `${this.state.apiUrl}${resource}/`
        if (keyword)
          url += keyword

        fetch(url)
        .then( response => response.json())
        .then( data => {
          this.setState({[resource]: data})
        })
        .catch(err => console.log("Oops!", err))
      }

    search = (resource, keyword) => {
        let query = `?search=${keyword}`
        this.getAll(resource, query)
    }

    render() {
    return (
        <React.Fragment>
            <NavBar />
            <Route exact path="/" render={(props) => { return <Home {...props} /> }} />
            <Route exact path="/orders" render={(props) => { return <Orders order={this.state.order} customers={this.state.customer} {...props} getAll={this.getAll}/> }} />
            <Route exact path="/employees" render={(props) => { return <Employees {...props} employee={this.state.employee} {...props} getAll={this.getAll}/> }} />
            <Route exact path="/producttypes" render={(props) => { return <ProductTypes producttypes={this.state.producttype} getAll={this.getAll} {...props}/>}} />
            <Route exact path="/customers" render={(props) => { return <Customers customers={this.state.customer} getAll={this.getAll} {...props}/> }} />
            <Route exact path="/products" render={(props) => { return <Products product={this.state.product} getAll={this.getAll} {...props}/> }} />
            <Route exact path="/computers" render={(props) => { return <Computers computer={this.state.computer} getAll={this.getAll} {...props}/> }} />
            <Route exact path="/trainings" render={(props) => {
                return <Trainings {...props}
                training={this.state.training}
                getAll={this.getAll}
                /> }} />
            <Route exact path="/departments" render={(props) => { return <Departments department={this.state.department} {...props} getAll={this.getAll}/> }} />
            <Route exact path="/paymenttypes" render={(props) => {
                 return <PaymentTypes {...props}
                 paymenttype={this.state.paymenttype}
                 getAll={this.getAll}
                 /> }} />
        </React.Fragment>
    )
  }
}

