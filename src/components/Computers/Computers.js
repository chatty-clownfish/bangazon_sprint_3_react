import React, { Component } from 'react'
import ComputerItem from './Computer-Item'

export default class Computers extends Component {

    componentDidMount() {
        this.props.getAll("computer")
    }

    render() {
        const computerNode = this.props.computer.map( (computer) => {
        return (<ComputerItem computer={computer} key={computer.id} />)
        })

        return (
            <div className="computer-container">
                <h2>Computers</h2>
                <ul>{computerNode}</ul>
            </div>
        )
    }
    }