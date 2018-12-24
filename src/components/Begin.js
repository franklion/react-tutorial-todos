import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Begin = () => (
    <div className="begin">
        <span>開始</span>
        <FontAwesomeIcon icon={['far', 'hand-point-down']} className="icon-hand-point-down" />
        <span>填答</span>
    </div>
)

export default Begin;