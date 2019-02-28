import React, { Component } from "react"

export default class EmployeeItem extends Component {
  render() {
    return (<li>{this.props.employee.first_name}</li>)
  }
}