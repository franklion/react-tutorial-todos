import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class SurveyQuestion extends Component {

    render() {
        const { details, index } = this.props
        const { answers, total } = details

        return (
            <div className="survey-question">
                <h1 className="title">
                    <span className="title-number">{index}</span> { details.title }
                </h1>
                

                <table className="survey-table">
                    <thead className="table-thead">
                        <tr>
                            <th>答案選項</th>
                            <th>填答次數</th>
                            <th>百分比</th>
                        </tr>
                    </thead>
                    <tbody className="table-tbody">
                        {
                            Object.keys(answers).map((answer, index ) => (
                                <tr key={index}>
                                    <td>
                                        <span className={this.handleAnswerColorTip(answers[answer])}></span>
                                        { answer }
                                    </td>
                                    <td>{ answers[answer] }</td>
                                    <td>{ parseInt(answers[answer] / total * 100 ) + '%' }</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>  
            </div>
        );
    }

    handleAnswerColorTip = (total) => {
        return classNames({
            'answer-color-tip': true,
            'is-active': total > 0
        })
    }
}

SurveyQuestion.propTypes = {
    details: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
};

export default SurveyQuestion;