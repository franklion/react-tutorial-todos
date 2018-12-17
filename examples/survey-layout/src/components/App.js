import React, { Component } from 'react';
import Cover from '../images/cover.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// https://www.surveycake.com/s/Vxz86


class App extends Component {
  render() {
    return (
      <div className="app">
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

            <form className="survey-form" onSubmit={this.handleSubmit}>

                {/* 第一題 */}
                <div className="subject-wrapper">
                    <h1 className="subject-title" data-index="1">今天想吃什麼</h1>
                    <div className="require-answer-tip">此題必填</div>
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

                    <div className="option">
                        <FontAwesomeIcon icon={['far', 'circle']} className="icon-circle" />
                        海南雞飯
                    </div>
                    <div className="option">
                        <FontAwesomeIcon icon={['far', 'circle']} className="icon-circle" />
                        炸雞腿飯
                    </div>
                    <div className="option">
                        <FontAwesomeIcon icon={['far', 'circle']} className="icon-circle" />
                        滷雞腿飯
                    </div>
                    <div className="option">
                        <FontAwesomeIcon icon={['far', 'circle']} className="icon-circle" />
                        蒲燒鯛魚飯
                    </div>
                    <div className="option">
                        <FontAwesomeIcon icon={['far', 'circle']} className="icon-circle" />
                        雞排飯
                    </div>
                    <div className="option">
                        <FontAwesomeIcon icon={['far', 'circle']} className="icon-circle" />
                        豬排飯
                    </div>
                    </div>
                </div>

                {/* 第二題 */}
                <div className="subject-wrapper">
                    <h1 className="subject-title" data-index="2">需要加湯嗎</h1>
                    <div className="subject-answer">
                    <div className="option is-active">
                        <FontAwesomeIcon icon={['far', 'dot-circle']} className="icon-circle" />
                        要
                    </div>
                    <div className="option">
                        <FontAwesomeIcon icon={['far', 'circle']} className="icon-circle" />
                        不要
                    </div>
                    </div>
                </div>

                {/* 第三題 */}
                <div className="subject-wrapper">
                    <h1 className="subject-title" data-index="3">要什麼湯</h1>
                    <div className="subject-answer">
                    <div className="option is-active">
                        <FontAwesomeIcon icon={['far', 'dot-circle']} className="icon-circle" />
                        豆腐湯
                    </div>
                    <div className="option">
                        <FontAwesomeIcon icon={['far', 'circle']} className="icon-circle" />
                        青菜湯
                    </div>
                    <div className="option">
                        <FontAwesomeIcon icon={['far', 'circle']} className="icon-circle" />
                        蛋花湯
                    </div>
                    <div className="option">
                        <FontAwesomeIcon icon={['far', 'circle']} className="icon-circle" />
                        貢丸湯
                    </div>
                    </div>
                </div>

                {/* 第四題 */}
                <div className="subject-wrapper">
                    <h1 className="subject-title" data-index="4">有其他需求嗎</h1>
                    <div className="subject-answer">
                    <div className="option is-active">
                        <FontAwesomeIcon icon={['fas', 'check-square']} className="icon-circle" />
                        加飯
                    </div>
                    <div className="option">
                        <FontAwesomeIcon icon={['far', 'square']} className="icon-circle" />
                        少飯
                    </div>
                    <div className="option">
                        <FontAwesomeIcon icon={['far', 'square']} className="icon-circle" />
                        去蔥
                    </div>
                    <div className="option">
                        <FontAwesomeIcon icon={['far', 'square']} className="icon-circle" />
                        其他
                    </div>
                    <div className="option">
                        <FontAwesomeIcon icon={['far', 'square']} className="icon-circle" />
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
