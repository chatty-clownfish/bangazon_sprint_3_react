import React, { Component } from "react"

export default class OrderItem extends Component {
    state= {
        customer: {},
        payment: {}
    }

    getBuyerDetail = () => {
        fetch(this.props.order.customer)
          .then(response => response.json())
          .then(data => {
            this.setState({ customer: data })
          })
      }
      getPaymentDetail = () => {
        fetch(this.props.order.payment_type)
          .then(response => response.json())
          .then(data => {
            this.setState({ payment: data })
          })
      }

      componentDidMount() {
        this.getBuyerDetail()
        this.getPaymentDetail()
      }

  render() {
            return(
                <ul>
                    <li>Name: {this.state.customer.first_name} {this.state.customer.last_name}</li>
                    <li> Payment: {this.state.payment.name}</li>
                    <br>
                    </br>
                </ul>
                )
  }
}