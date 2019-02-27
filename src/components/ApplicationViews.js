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

export default class ApplicationViews extends Component {

    state = {
        department: [],
        employee: [],
        product_type: [],
        payment_type: [],
        customer: [],
        product: [],
        order: [],
        training: [],
        computer: [],
        apiUrl: 'http://127.0.0.1:8000/'
      }

    setDepartmentState = (department) => this.setState({department})
    setEmployeeState = (employee) => this.setState({employee})
    setProductTypeState = (product_type) => this.setState({product_type})
    setProductTypeState = (product_type) => this.setState({product_type})
    setPaymentTypeState = (payment_type) => this.setState({payment_type})
    setCustomerState = (customer) => this.setState({customer})
    setProductState = (product) => this.setState({product})
    setOrderState = (order) => this.setState({order})
    setTrainingState = (training) => this.setState({training})
    setComputerState = (computer) => this.setState({computer})


    getAll = (resource, keyword=null) => {
        let url = `${this.state.apiUrl}${resource}/`
        if (keyword)
          url += keyword

        fetch(url)
        .then( response => response.json())
        .then( data => {
          console.log("Our Work", data)
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
            <Route exact path="/orders" render={(props) => { return <Orders {...props}/> }} />
            <Route exact path="/employees" render={(props) => { return <Employees {...props}/> }} />
            <Route exact path="/producttypes" render={(props) => { return <ProductTypes {...props}/> }} />
            <Route exact path="/customers" render={(props) => { return <Customers {...props}/> }} />
            <Route exact path="/products" render={(props) => { return <Products product={this.state.product} getAll={this.getAll} {...props}/> }} />
            <Route exact path="/trainings" render={(props) => { return <Trainings {...props}/> }} />
            <Route exact path="/computers" render={(props) => { return <Computers computer={this.state.computer} getAll={this.getAll} {...props}/> }} />
            <Route exact path="/departments" render={(props) => { return <Departments department={this.state.department} {...props} getAll={this.getAll}/> }} />
            <Route exact path="/paymenttypes" render={(props) => { return <PaymentTypes {...props}/> }} />


        </React.Fragment>
    )
  }
}

