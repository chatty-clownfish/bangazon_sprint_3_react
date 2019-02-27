import React, { Component } from "react"

export default class ProductItem extends Component {
  render() {
    return (<li>{this.props.product.title}</li>)
  }
}