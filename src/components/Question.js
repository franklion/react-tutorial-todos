import React from 'react';
import PropTypes from 'prop-types';
import { Element } from 'react-scroll';
import Option from './Option';

const Question = props =>  {

    const { index, questionSeriesNumber, handelAddToAnswer } = props
    const { title, options, answer, type, isShowAnswerTip } = props.details

    return (
        <Element name={`subject-wrapper${index}`}>
            <div className="subject-wrapper" >
                <h1 className="subject-title" data-index={index}>{title}</h1>
                {
                    answer.length === 0 && isShowAnswerTip &&
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
                            />
                        ))
                    }
                </div>
            </div>
        </Element>
    );
}

Question.propTypes = {
    index: PropTypes.number.isRequired,
    questionSeriesNumber: PropTypes.string.isRequired,
    details: PropTypes.object.isRequired,
    handelAddToAnswer: PropTypes.func.isRequired
};

export default Question;