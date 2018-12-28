import React from 'react'
import { Link } from 'react-router-dom'
import NotFoundImage from '../images/404.svg'

const NotFound = () => (
    <div className="not-found-page">
        <Link to="/" className="btn-return-home">回到首頁</Link>
        <img src={NotFoundImage} alt="404" className="not-found-image" />
    </div>
)


export default NotFound