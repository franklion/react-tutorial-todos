import React, { Component } from 'react';
import Cover from '../images/cover.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// https://www.surveycake.com/s/Vxz86


class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="banner">
          <img src={Cover} className="cover" alt="cover"/>
        </div>
        <div className="intro">
          <h1 className="intro-title">公司午餐外送</h1>
          <p className="intro-text">訂餐囉！今天要訂的是101食堂，大家想吃什麼呢？</p>
        </div>
        <div className="begin">
          <span>開始</span>
          <FontAwesomeIcon icon={['far', 'hand-point-down']} className="icon-hand-point-down" />
          <span>填答</span>
        </div>
        {/* TODO: 麵包削 */}

        <form className="survey-form">
          <div className="subject-wrapper">
            <h1 className="subject-title" data-index="1">今天想吃什麼</h1>
            <div className="subject-answer">
              <div className="option is-active">
                <FontAwesomeIcon icon={['far', 'dot-circle']} className="icon-circle" />
                排骨飯
              </div>
              <div className="option">
                <FontAwesomeIcon icon={['far', 'circle']} className="icon-circle" />
                排骨蛋炒飯
              </div>
              <div className="option">
                <FontAwesomeIcon icon={['far', 'circle']} className="icon-circle" />
                椒麻雞飯
              </div>
            </div>
          </div>
        </form>


      </div>
    );
  }
}

export default App;
