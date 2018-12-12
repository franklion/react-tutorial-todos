import React, { Component } from 'react';
import BmiInput from './BmiInput'
import BmiResult from './BmiResult'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      bmi: 0
    }
  }

  render() {
    return (
      <div>
        <h1>BMI PAGE</h1>
        <BmiResult bmi={this.state.bmi} />
        <BmiInput handleCalcBmi={this.handleCalcBmi}
                  handleResetBmi={this.handleResetBmi}
        />
      </div>
    )
  }

  handleCalcBmi = (height, weight) => {
    const heightMeter = height / 100
    const newBmi = +(weight / Math.pow(heightMeter, 2)).toFixed(1)
    this.setState({ bmi: newBmi })
  }

  handleResetBmi = () => {
    this.setState({ bmi: 0})
  }

}

export default App;
