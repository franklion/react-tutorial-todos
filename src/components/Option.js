import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Option extends Component {
    render() {
        const { option, type } = this.props
        const optionClass = classNames({
            option: true,
            'is-active': this.isOptionInAnswer()
        })
        
        return (
            <div className={optionClass} onClick={this.handelAddToAnswer}>
                {
                    type === 'single' ? <FontAwesomeIcon icon={['far', this.isOptionInAnswer() ? 'dot-circle' : 'circle']} className="icon-option" />
                                      : <FontAwesomeIcon icon={ this.isOptionInAnswer() ? ['fas', 'check-square'] : ['far', 'square']} className="icon-option" />
                }
                
                {option}
            </div>
        );
    }

    isOptionInAnswer = () => {
        const { answer, option } = this.props
        return answer.some(item => item === option)
    }

    handelAddToAnswer = (e) => {
        const { questionSeriesNumber, option } = this.props
        this.props.handelAddToAnswer(questionSeriesNumber , option)
    }
}

Option.propTypes = {
    questionSeriesNumber: PropTypes.string.isRequired,
    answer: PropTypes.array.isRequired,
    type: PropTypes.string.isRequired,
    option: PropTypes.string.isRequired,
    handelAddToAnswer: PropTypes.func.isRequired,
};

export default Option;