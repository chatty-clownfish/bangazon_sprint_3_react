import React, { Component } from "react"
import EmployeeItem from "../Employees/Employee-Item"

class Employee extends Component {

  componentDidMount() {
    this.props.getAll("employee")
  }

  render() {
    const employeeNode = this.props.employee.map( (employee) => {
      return (<EmployeeItem employee={employee} key={employee.id} />)
    })

    return (
      <div className="employees-container">
        <h2>A list of employees</h2>
        <ul>{employeeNode}</ul>
      </div>
    )
  }
}

export default Employee