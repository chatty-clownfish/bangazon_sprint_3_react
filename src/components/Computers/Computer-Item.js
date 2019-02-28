import React, { Component } from "react"

export default class ComputerItem extends Component {
  render() {
    return (<li>{this.props.computer.manufacturer} {this.props.computer.model}</li>)
  }
}