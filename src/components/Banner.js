import React from 'react';
import PropTypes from 'prop-types';

const Banner = props => {
    const { bannerImage } = props
    return (
        <div className="banner">
            <img src={bannerImage} className="banner-image" alt="cover" />
        </div>
    );
}

Banner.propTypes = {
    bannerImage: PropTypes.string.isRequired
};

export default Banner;