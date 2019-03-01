import React, { Component } from "react"

export default class EmployeeItem extends Component {
  render() {
    return (<li>{this.props.employee.first_name} {this.props.employee.last_name}</li>)
  }
}