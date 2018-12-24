import React, { Component } from 'react';
import Banner from '../images/banner.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// reference: https://www.surveycake.com/s/Vxz86
// firebase: https://lunch-survey.firebaseapp.com


class App extends Component {
  render() {
    return (
      <div id="app">
        <div className="container">
            <div className="banner">
                <img src={Banner} className="banner-image" alt="banner"/>
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

            <form className="survey-form" onSubmit={this.handleSubmit}>

                {/* 第一題 */}
                <div className="subject-wrapper">
                    <h1 className="subject-title" data-index="1">今天想吃什麼</h1>
                    <div className="require-answer-tip">此題必填</div>
                    <div className="subject-answer">
                    <div className="option is-active">
                        <FontAwesomeIcon icon={['far', 'dot-circle']} className="icon-option" />
                        排骨飯
                    </div>
                    <div className="option">
                        <FontAwesomeIcon icon={['far', 'circle']} className="icon-option" />
                        排骨蛋炒飯
                    </div>
                    <div className="option">
                        <FontAwesomeIcon icon={['far', 'circle']} className="icon-option" />
                        椒麻雞飯
                    </div>

                    <div className="option">
                        <FontAwesomeIcon icon={['far', 'circle']} className="icon-option" />
                        海南雞飯
                    </div>
                    <div className="option">
                        <FontAwesomeIcon icon={['far', 'circle']} className="icon-option" />
                        炸雞腿飯
                    </div>
                    <div className="option">
                        <FontAwesomeIcon icon={['far', 'circle']} className="icon-option" />
                        滷雞腿飯
                    </div>
                    <div className="option">
                        <FontAwesomeIcon icon={['far', 'circle']} className="icon-option" />
                        蒲燒鯛魚飯
                    </div>
                    <div className="option">
                        <FontAwesomeIcon icon={['far', 'circle']} className="icon-option" />
                        雞排飯
                    </div>
                    <div className="option">
                        <FontAwesomeIcon icon={['far', 'circle']} className="icon-option" />
                        豬排飯
                    </div>
                    </div>
                </div>

                {/* 第二題 */}
                <div className="subject-wrapper">
                    <h1 className="subject-title" data-index="2">需要加湯嗎</h1>
                    <div className="subject-answer">
                    <div className="option is-active">
                        <FontAwesomeIcon icon={['far', 'dot-circle']} className="icon-option" />
                        要
                    </div>
                    <div className="option">
                        <FontAwesomeIcon icon={['far', 'circle']} className="icon-option" />
                        不要
                    </div>
                    </div>
                </div>

                {/* 第三題 */}
                <div className="subject-wrapper">
                    <h1 className="subject-title" data-index="3">要什麼湯</h1>
                    <div className="subject-answer">
                    <div className="option is-active">
                        <FontAwesomeIcon icon={['far', 'dot-circle']} className="icon-option" />
                        豆腐湯
                    </div>
                    <div className="option">
                        <FontAwesomeIcon icon={['far', 'circle']} className="icon-option" />
                        青菜湯
                    </div>
                    <div className="option">
                        <FontAwesomeIcon icon={['far', 'circle']} className="icon-option" />
                        蛋花湯
                    </div>
                    <div className="option">
                        <FontAwesomeIcon icon={['far', 'circle']} className="icon-option" />
                        貢丸湯
                    </div>
                    </div>
                </div>

                {/* 第四題 */}
                <div className="subject-wrapper">
                    <h1 className="subject-title" data-index="4">有其他需求嗎</h1>
                    <div className="subject-answer">
                    <div className="option is-active">
                        <FontAwesomeIcon icon={['fas', 'check-square']} className="icon-option" />
                        加飯
                    </div>
                    <div className="option">
                        <FontAwesomeIcon icon={['far', 'square']} className="icon-option" />
                        少飯
                    </div>
                    <div className="option">
                        <FontAwesomeIcon icon={['far', 'square']} className="icon-option" />
                        去蔥
                    </div>
                    <div className="option">
                        <FontAwesomeIcon icon={['far', 'square']} className="icon-option" />
                        其他
                    </div>
                    <div className="option">
                        <FontAwesomeIcon icon={['far', 'square']} className="icon-option" />
                        無
                    </div>
                    </div>
                </div>

                {/* 提交按鈕 */}
                <div className="btn-wrapper">
                    <button type="submit" className="btn-submit">送出</button>
                </div>
          
            </form>
        </div>
        <div className="fixed-footer">
            <div className="progress">
                <div className="progress-bar" style={{width:'25%'}}></div>
            </div>
            <div className="text">25%</div>
        </div>
      </div>
      
    )
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('handleSubmit')
  }
}

export default App;
