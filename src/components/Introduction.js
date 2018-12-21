import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Introduction extends Component {

    render() {
        const { title, desc } = this.props
        return (
            <div className="intro">
                <h1 className="intro-title">{title}</h1>
                <p className="intro-text">{desc}</p>
            </div>
        );
    }
}

Introduction.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired
};

export default Introduction;