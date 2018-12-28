import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';
import { getColors } from '../helpers'

class SurveyChart extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            chartData: {},
            chartBackgroundColor: getColors(Object.keys(props.details.answers).length)
        }
    }

    componentDidMount() {
        const { answers } = this.props.details
        const chartData = this.handleChartData(answers)
        this.setState({ chartData })
    }

    componentDidUpdate(prevProps) {
        const surveyAnswerCondition = this.props.details.answers && 
                                      prevProps.details.answers !== this.props.details.answers


        if (surveyAnswerCondition) {
            const chartData = this.handleChartData(this.props.details.answers)
            this.setState({ chartData })
        }
    }
    

    render() {
        const { chartData } = this.state

        return (
            <div className="survey-chart">
                <Doughnut data={chartData} 
                            legend={{ position: 'bottom' }}
                            options={{ maintainAspectRatio: false }}
                />
            </div>
        );
    }

    handleChartData = answers => {
        if (!answers) return

        const { chartBackgroundColor } = this.state
        return {
            labels: Object.keys(answers),
            datasets: [{
                data: Object.values(answers),
                backgroundColor: chartBackgroundColor
            }]
        }
    }
}

SurveyChart.propTypes = {
    details: PropTypes.object.isRequired
};

export default SurveyChart;