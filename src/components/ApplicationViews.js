import React, { Component } from 'react'

import { Route } from 'react-router-dom'
import DepartmentComponent from '../components/department-component'


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
            <Route exact path="/" render={(props) => {
                return <DepartmentComponent movies={this.state.movies} getAll={this.getAll}/>
            }}/>
        </React.Fragment>
      
    )
  }
}

