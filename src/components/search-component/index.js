import React, { Component } from 'react'

class SearchComponent extends Component {
  state = {
    keyword: null
  }

  searchStuff = () => {
    this.props.search("department", this.state.keyword)
    this.props.search("employee", this.state.keyword)
    this.props.search("product_type", this.state.keyword)
    this.props.search("payment_type", this.state.keyword)
    this.props.search("customer", this.state.keyword)
    this.props.search("product", this.state.keyword)
    this.props.search("order", this.state.keyword)
    this.props.search("training", this.state.keyword)
    this.props.search("computer", this.state.keyword)
  }

  setKeyword = (event) => {
    this.setState({keyword: event.target.value})
  }

  render() {
    return (
      <>
        <input type='text' onChange={this.setKeyword} placeholder="search for stuff"/>
        <button onClick={this.searchStuff}>search</button>
      </>
    )
  }
}

export default SearchComponent