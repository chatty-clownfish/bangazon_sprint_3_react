import React, { Component } from "react"
import DepartmentItem from "../department-item"

class Departments extends Component {

  componentDidMount() {
    this.props.getAll("department")
  }

  render() {
    const departmentNode = this.props.department.map( (department) => {
      return (<DepartmentItem department={department} key={department.id} />)
    })

    return (
      <div className="department-container">
        <h2>Departments</h2>
        <ul>{departmentNode}</ul>
      </div>
    )
  }
}

export default Departments