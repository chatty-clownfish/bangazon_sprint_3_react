import React, { Component } from 'react'
import TrainingEvent from './TrainingEvent'


export default class Trainings extends Component {
    
    componentDidMount() {
        this.props.getAll("training")
    }
    
    render() {
        const trainingNode = this.props.training.map((training) => {
            return(<TrainingEvent training={training} key={training.id} />)
        })



    return (
        <div>
        <h1> Trainings</h1>
            <ul>{trainingNode}</ul>
        </div>
    )}}