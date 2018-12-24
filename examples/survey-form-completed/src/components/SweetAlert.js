import React from 'react';
import PropTypes from 'prop-types';
import Lunch from '../images/lunch.svg';

const SweetAlert = props => {
    const { isShowSweetAlert, handleHideSweetAlert } = props 
    if (isShowSweetAlert) {
        return (
            <div className="alert-bg">
                <div className="alert">
                    <img src={Lunch} alt="午餐" className="icon-lunch" />
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
    handleHideSweetAlert: PropTypes.func.isRequired
};

export default SweetAlert;