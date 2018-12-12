import React, { Component } from 'react';
import Panel from './panel'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: ['vue', 'react', 'angular']
    }
  }

  render() {
    return (
      <div>
        <Panel 
          list={this.state.list}
          handleAddOne={this.handleAddOne}
        />
      </div>
    )
  }

  handleAddOne = () => {
    const list = [...this.state.list]
    list.push('knock')
    this.setState({ list })
  }
}

export default App;
