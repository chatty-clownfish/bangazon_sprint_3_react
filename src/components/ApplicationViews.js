import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import NavBar from './navbar/navbar'
import Home from './home/home'
import Orders from './Orders/Orders'
import Employees from './Employees/Employees'
import ProductTypes from './ProductTypes/ProductTypes'
import Customers from './Customers/Customers'
import Products from './Products/Products'
import Trainings from './Trainings/Trainings'
import Computers from './Computers/Computers'
import Departments from './Departments/Deparments'
import PaymentTypes from './PaymentTypes/PaymentTypes'

export default class ApplicationViews extends Component {
    render() {
    return (
        <React.Fragment>
            <NavBar />
            <Route exact path="/" render={(props) => {
                return <Home {...props} />
            }}/>
            <Route exact path="/orders" render={(props) => { return <Orders {...props}/> }} />
            <Route exact path="/employees" render={(props) => { return <Employees {...props}/> }} />
            <Route exact path="/producttypes" render={(props) => { return <ProductTypes {...props}/> }} />
            <Route exact path="/customers" render={(props) => { return <Customers {...props}/> }} />
            <Route exact path="/products" render={(props) => { return <Products {...props}/> }} />
            <Route exact path="/trainings" render={(props) => { return <Trainings {...props}/> }} />
            <Route exact path="/computers" render={(props) => { return <Computers {...props}/> }} />
            <Route exact path="/departments" render={(props) => { return <Departments {...props}/> }} />
            <Route exact path="/paymenttypes" render={(props) => { return <PaymentTypes {...props}/> }} />


        </React.Fragment>
    )
  }
}

