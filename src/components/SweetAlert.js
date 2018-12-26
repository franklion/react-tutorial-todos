import React from 'react';
import PropTypes from 'prop-types';

const SweetAlert = props => {
    const { isShowSweetAlert, handleHideSweetAlert, lunchImage } = props 

    if (isShowSweetAlert) {
        return (
            <div className="alert-bg">
                <div className="alert">
                    <img src={lunchImage} alt="午餐" className="icon-lunch" />
                    <h1 className="title">恭喜</h1>
                    <p className="desc">表單填寫成功</p>
                    <button type="button" className="btn-ok" onClick={handleHideSweetAlert}>OK</button>
                </div>
            </div>
        )
    }
    return null
}

SweetAlert.propTypes = {
    isShowSweetAlert: PropTypes.bool.isRequired,
    handleHideSweetAlert: PropTypes.func.isRequired,
    lunchImage: PropTypes.string.isRequired
};

export default SweetAlert;