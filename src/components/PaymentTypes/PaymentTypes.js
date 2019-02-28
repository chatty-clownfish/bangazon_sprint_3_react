import React, { Component } from 'react'
import PaymentTypeList from './PaymentTypeList'


export default class PaymentTypes extends Component {

    componentDidMount() {
        this.props.getAll("paymenttype")
    }

    render() {
        const paymenttypeNode = this.props.paymenttype.map((paymenttype) => {
            return(<PaymentTypeList paymenttype={paymenttype} key={paymenttype.id} />)
        })

    return (
        <div>
            <h1>Payment Types</h1>
            <ul>{paymenttypeNode}</ul>
        </div>
    )}}