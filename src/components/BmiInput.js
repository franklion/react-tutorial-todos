import React, { Component } from 'react'

class BmiInput extends Component {

    constructor(props) {
        super(props)

        this.heightInput = React.createRef();
        this.weightInput = React.createRef();
    }
    render() {
        return (
            <div>
                <div>
                    <label>Height: <input type="text" ref={this.heightInput} defaultValue={170}></input>cm</label>
                </div>
                <div>
                    <label>Weight: <input type="text" ref={this.weightInput} defaultValue={50}></input>kg</label>
                </div>
                <button onClick={this.handleCalcBmi}>send</button>
                <button onClick={this.handleResetBmi}>reset</button>    
            </div>
        )
    }

    handleCalcBmi = () => {
        // Uncontrolled Components
        // ref reference link: https://medium.com/4cats-io/24hrs-react-101-b287ffad1070

        const heightInputValue = parseInt(this.heightInput.current.value)
        const weightInputValue = parseInt(this.weightInput.current.value)

        if (!this.isValidBmiInput(heightInputValue) ||
            !this.isValidBmiInput(weightInputValue)) {
                alert('高度或體重不可為零！')
                return false
            }
        
        this.props.handleCalcBmi(heightInputValue, weightInputValue)
    }

    handleResetBmi = () => {
        this.heightInput.current.value = 0
        this.weightInput.current.value = 0
        this.props.handleResetBmi()
    }

    isValidBmiInput = input => {
        const reg = /^[1-9]+[0-9]*$/
        return reg.test(input)
    }
}

export default BmiInput