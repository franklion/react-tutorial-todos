import React, { Component } from 'react'
import classNames from 'classnames'

class BmiResult extends Component {    
    render() {
        const { bmi } = this.props
        const bmiClass = classNames({
            warn: (bmi >= 24) || (bmi > 0 && bmi < 18.5),
            good: bmi >= 18.5 && bmi < 24,
        })

        return (
            <div>
                <h2>Bmi Result: {bmi}</h2>
                <h2>Status: <span className={bmiClass}>{ this.handleRenderStatus(bmi) }</span></h2>
            </div>
        )
    }

    handleRenderStatus = bmi => {
        if (bmi > 0 && bmi < 18.5) return '體重過輕'
        if (bmi >= 18.5 && bmi < 24) return '正常範圍'
        if (bmi >= 24) return '異常範圍'
        
        return '無'
    }
}

export default BmiResult