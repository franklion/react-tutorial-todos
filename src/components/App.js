import React, { Component } from 'react';
import { scroller } from 'react-scroll';
import BannerImage from '../images/banner.jpg';
import LunchImage from '../images/lunch.svg';

// components
import Banner from './Banner';
import Introduction from './Introduction';
import Begin from './Begin';
import Question from './Question';
import CopyRight from './CopyRight';
import Footer from './Footer';
import SweetAlert from './SweetAlert';
import base from '../base';

// https://www.surveycake.com/s/Vxz86

class App extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            title: '公司午餐外送',
            desc: '訂餐囉！今天要訂的是101食堂，大家想吃什麼呢？',
            questions: {
                question1: {
                    type: 'single',
                    title: '今天想吃什麼',
                    options: ['排骨飯', '排骨蛋炒飯', '椒麻雞飯', '海南雞飯', '炸雞腿飯', '滷雞腿飯', '蒲燒鯛魚飯', '雞排飯', '豬排飯'],
                    answer: [],
                    isShowAnswerTip: false
                },
                question2: {
                    type: 'single',
                    title: '需要加湯嗎',
                    options: ['要', '不要'],
                    answer: [],
                    isShowAnswerTip: false
                },
                question3: {
                    type: 'single',
                    title: '要什麼湯',
                    options: ['豆腐湯', '青菜湯', '蛋花湯', '貢丸湯'],
                    answer: [],
                    isShowAnswerTip: false
                },
                question4: {
                    type: 'multiple',
                    title: '有其他需求嗎',
                    options: ['加飯', '少飯', '去蔥', '其他', '無'],
                    answer: [],
                    isShowAnswerTip: false
                }
            },
            isShowSweetAlert: false
        }
    }

    render() {
        const { title, desc, questions, isShowSweetAlert } = this.state

        return (
            <div id="app">
                <div className="container">
                    <Banner bannerImage={BannerImage} />
                    <Introduction title={title}
                                  desc={desc}
                    />                  
                    <Begin />

                    <form id="survey-form" className="survey-form" onSubmit={this.handleSubmit}>
                        {
                            Object.keys(questions).map((key, index) => (
                                
                                <Question key={key}
                                          index={index + 1}
                                          questionSeriesNumber={key}
                                          details={questions[key]}
                                          handelAddToAnswer={this.handelAddToAnswer}
                                />
                            )) 
                        }
                        <div className="btn-wrapper">
                            <button type="submit" className="btn-submit">送出</button>
                        </div>    
                    </form>
                    
                    <CopyRight />
                </div>


                <Footer percentage={this.handldeProcess()} />
                <SweetAlert isShowSweetAlert={isShowSweetAlert}
                            handleHideSweetAlert={this.handleHideSweetAlert}
                            lunchImage={LunchImage}
                />
            </div>
        )
    }

    handelAddToAnswer = (questionSeriesNumber, option) => {           
        const questions = JSON.parse(JSON.stringify(this.state.questions))
        let answer = questions[questionSeriesNumber].answer
        const type = questions[questionSeriesNumber].type
        const isEqual = answer.some(item => item === option)

        if (!isEqual && type === 'single') {
            answer = [option]
            questions[questionSeriesNumber].isShowAnswerTip = false
        } else if (!isEqual && type === 'multiple') {
            answer.push(option)
            questions[questionSeriesNumber].isShowAnswerTip = false
        } else if (isEqual) {
            answer = answer.filter(item => item !== option)
            questions[questionSeriesNumber].isShowAnswerTip = true
        }

        questions[questionSeriesNumber].answer = answer
        
        this.setState({ questions }, () => this.handldeProcess() )
    }

    handldeProcess = () => {
        const { questions } = this.state
        return Object.keys(questions).reduce((percentage, currentQuestion) => {
            if ( questions[currentQuestion].answer.length > 0 ) {
                return percentage + 25
            }
            return percentage
        }, 0) + '%'
    }

    scrollTo = inValidQuestionSeriesNumber => {
        scroller.scrollTo(`subject-wrapper${inValidQuestionSeriesNumber}`, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const voteName = `anonymous_${new Date().getTime()}`
        const questions = JSON.parse(JSON.stringify(this.state.questions))

        // find the first inValid question and scroll to the question
        const checkResult = Object.keys(questions).every((question, index) => {
            if (questions[question].answer.length > 0) return true
            
            this.scrollTo(index + 1)
            return false
        })
        
        // check answers and show tip
        if (!checkResult) {
            Object.keys(questions).forEach(question => {
                if (questions[question].answer.length === 0) questions[question].isShowAnswerTip = true
            })
            this.setState({ questions })
            return
        }

        // ------------------------- handleSubmit ------------------------------
        base.post(`${voteName}/questions`, { data: questions })
            .then(() => this.handleResetQuestions(questions) )
            .catch(err =>  console.log(err) );
    }

    handleResetQuestions = questions => {
        const resetQuestions = JSON.parse(JSON.stringify(this.state.questions))
        Object.keys(resetQuestions).forEach(question => {
            resetQuestions[question].answer = []
            resetQuestions[question].isShowAnswerTip = false
        })
 
        this.setState({ isShowSweetAlert: true, questions: resetQuestions })
    }

    handleHideSweetAlert = () => {
        this.setState({ isShowSweetAlert: false })
    }
}

export default App;
