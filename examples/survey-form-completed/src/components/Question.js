import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Element } from 'react-scroll';
import Option from './Option';

class Question extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isReadyToShowAnswerTip: props.isTriggerShowAllAnswerTip || false
        }
    }
    
    componentDidUpdate(prevProps) {
        if (prevProps.isTriggerShowAllAnswerTip !== this.props.isTriggerShowAllAnswerTip) {
            this.setState({ isReadyToShowAnswerTip: this.props.isTriggerShowAllAnswerTip })
        }
    }

    render() {
        const { index, questionSeriesNumber, handelAddToAnswer } = this.props
        const { title, options, answer, type } = this.props.details

        return (
            <Element name={`subject-wrapper${index}`}>
                <div className="subject-wrapper" >
                    <h1 className="subject-title" data-index={index}>{title}</h1>
                    {
                        answer.length === 0 && this.state.isReadyToShowAnswerTip &&
                        <p className="require-answer-tip">此題必填</p>
                    }
                    <div className="subject-answer">
                        {
                            options.map((option, index) => (
                                <Option key={index}
                                    questionSeriesNumber={questionSeriesNumber}
                                    answer={answer}
                                    type={type}    
                                    option={option}
                                    handelAddToAnswer={handelAddToAnswer}
                                    handleReadyToShowAnswerTip={this.handleReadyToShowAnswerTip}
                                />
                            ))
                        }
                    </div>
                </div>
            </Element>
            
        );
    }

    handleReadyToShowAnswerTip = () => {
        if (this.state.isReadyToShowAnswerTip === true) return
        this.setState({ isReadyToShowAnswerTip: true })
    }
}




Question.propTypes = {
    index: PropTypes.number.isRequired,
    questionSeriesNumber: PropTypes.string.isRequired,
    details: PropTypes.object.isRequired,
    handelAddToAnswer: PropTypes.func.isRequired
};

export default Question;