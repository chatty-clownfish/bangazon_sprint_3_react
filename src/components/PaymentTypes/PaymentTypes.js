import React, { Component } from 'react'
import PaymentTypeList from './PaymentTypeList'


export default class PaymentTypes extends Component {

    componentDidMount() {
        this.props.getAll("paymenttype")
    }

    render() {
        const paymenttypeNode = this.props.payment_type.map((payment_type) => {
            return(<PaymentTypeList payment_type={payment_type} key={payment_type.id} />)
        })

    return (
        <div>
            <h1>Payment Types</h1>
            <ul>{paymenttypeNode}</ul>
        </div>
    )}}