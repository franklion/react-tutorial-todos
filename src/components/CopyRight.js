import React from 'react';
import OwlImage from '../images/owl.svg';

const CopyRight = () => {
    return (
        <div className="copy-right">
            <img src={OwlImage} alt="owl" className="icon-logo" />
            <p>2018 OWL SURVEY</p>
        </div>
    );
}


export default CopyRight;