import React, { Component } from "react"
import OrderItem from '../Orders/OrderItem'

class Orders extends Component {


  componentDidMount() {
    this.props.getAll("order")
  }

  render() {
    const OrderNode = this.props.order.map((order) => {
      return (<OrderItem order={order} key={order.id} />)
    })

    return (
      <div className="department-container">
        <h2> Orders </h2>
        <ul>{OrderNode}</ul>
      </div>
    )
  }
}

export default Orders
