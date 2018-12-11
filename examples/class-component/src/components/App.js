import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    // 使用 this 之前必須先呼叫 super()
    this.state = {
      food: ''
    }
  }

  render() {
    return (
      <div>
        <h1>My love food: {this.state.food}</h1>
        <button onClick={this.handleClick.bind(this)}>click me</button>
      </div>
    )
  }

  handleClick() {
    this.setState({ food: 'McDonald' })
  }
}

export default App;
