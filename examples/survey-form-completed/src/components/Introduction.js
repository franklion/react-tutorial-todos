import React from 'react';
import PropTypes from 'prop-types';

const Introduction = props => {
    const { title, desc } = props
    return (
        <div className="intro">
            <h1 className="intro-title">{title}</h1>
            <p className="intro-text">{desc}</p>
        </div>
    );
}

Introduction.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired
};

export default Introduction;