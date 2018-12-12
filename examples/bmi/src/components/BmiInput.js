import React, { Component } from 'react'

class BmiInput extends Component {
    render() {
        return (
            <div>
                <div>
                    <label>Height: <input type="text" ref="heightInput" defaultValue={170}></input>cm</label>
                </div>
                <div>
                    <label>Weight: <input type="text" ref="weightInput" defaultValue={50}></input>kg</label>
                </div>
                <button onClick={this.handleCalcBmi}>send</button>
                <button onClick={this.handleResetBmi}>reset</button>    
            </div>
        )
    }

    handleCalcBmi = () => {
        //  Uncontrolled Components
        const heightInputValue = parseInt(this.refs.heightInput.value)
        const weightInputValue = parseInt(this.refs.weightInput.value)

        if (!this.isValidBmiInput(heightInputValue) ||
            !this.isValidBmiInput(weightInputValue)) {
                alert('高度或體重不可為零！')
                return false
            }
        
        this.props.handleCalcBmi(heightInputValue, weightInputValue)
    }

    handleResetBmi = () => {
        const heightInput = this.refs.heightInput
        const weightInput = this.refs.weightInput
        heightInput.value = 0
        weightInput.value = 0
        this.props.handleResetBmi()
    }

    isValidBmiInput = input => {
        const reg = /^[1-9]+[0-9]*$/
        return reg.test(input)
    }
}

export default BmiInput