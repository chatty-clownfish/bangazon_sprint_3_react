import React, { Component } from "react"
import DepartmentItem from "../department-item"

class DepartmentComponent extends Component {

  componentDidMount() {
    this.props.getAll("department")
  }

  render() {
    const departmentNode = this.props.department.map( (department) => {
      return (<DepartmentItem department={department} key={department.id} />)
    })

    return (
      <div className="department-container">
        <h2>A list of departments</h2>
        <ul>{departmentNode}</ul>
      </div>
    )
  }
}

export default DepartmentComponent
