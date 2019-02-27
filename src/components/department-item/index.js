import React, { Component } from "react"

export default class DepartmentItem extends Component {
  render() {
    return (<li>{this.props.department.name}</li>)
  }
}