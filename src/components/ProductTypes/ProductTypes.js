import React, { Component } from 'react'


export default class ProductTypes extends Component {

    componentDidMount() {
        this.props.getAll("producttype")
    }

    render() {
        const ProductTypes = this.props.producttypes.map((producttype)=>{
        return(<li>{producttype.name}</li>)
        })
    return (
        <div>
            <h1> Product Types </h1>
            <ul>
                {ProductTypes}
            </ul>
        </div>
    )}}