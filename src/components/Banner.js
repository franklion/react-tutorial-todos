import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Banner extends Component {
    render() {
        const { bannerImage } = this.props
        return (
            <div className="banner">
                <img src={bannerImage} className="banner-image" alt="cover" />
            </div>
        );
    }
}

Banner.propTypes = {
    bannerImage: PropTypes.string.isRequired
};

export default Banner;