import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Home from './home/home'


export default class ApplicationViews extends Component {
    render() {
    return (
        <React.Fragment>
            <Route exact path="/" render={(props) => {
                return <Home {...props} />
            }}/>
        </React.Fragment>
      
    )
  }
}

