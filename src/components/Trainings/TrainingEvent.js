import React, { Component } from "react"

export default class TrainingEvent extends Component {
    render() {
        return(<li>{this.props.training.name}</li>)
    }
}