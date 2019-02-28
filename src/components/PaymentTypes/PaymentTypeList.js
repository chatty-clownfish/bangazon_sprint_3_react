import React, { Component } from "react"

export default class PaymentTypeList extends Component {
    render() {
        return(<li>{this.props.paymenttype.name}</li>)
    }
}