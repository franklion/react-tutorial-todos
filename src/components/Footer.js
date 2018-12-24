import React from 'react';
import PropTypes from 'prop-types';

const Footer = props => {
    const { percentage } = props
    return (
        <div className="fixed-footer">
            <div className="progress">
                <div className="progress-bar" style={{ width: percentage }}></div>
            </div>
            <div className="text">{percentage}</div>
        </div>
    );
}

Footer.propTypes = {
    percentage: PropTypes.string.isRequired,
};

export default Footer;