import React, { Component } from 'react';
import { getColors } from '../helpers'

// components
import base from '../base';
import sampleQuestions from '../sample-questions'
import SurveyQuestion from '../components/SurveyQuestion'
import SurveyChart from '../components/SurveyChart'


// structure
/*
const surveyResult = {
    question1: {
        title: '今天想吃什麼',
        options: {
            排骨飯: 1,
            海南雞飯: 2
        },
        total: 3
    },
    question2: {
        title: '需要加湯嗎',
        options: {
            要: 2,
            不要: 0     
        },
        total: 2
    },
    question3: {
        title: '要什麼湯',
        options: {
            豆腐湯: 2,
            青菜湯: 5,
            蛋花湯: 9,
            貢丸湯: 2      
        },
        total: 18
    },
}
*/


class SurveyResult extends Component {
    constructor(props) {
        super(props)
        this.state = {
            surveyResult: {},
            surveyTotal: 0
        }
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    componentDidMount() {

        this.ref = base.listenTo('/', {
            context: this,
            then(surveyData) {

                const surveyTotal = Object.keys(surveyData).length
                if (surveyTotal > 0 ) {

                    let surveyResult = {}
 
                    Object.keys(sampleQuestions).forEach(question => {
                        surveyResult[question] = {
                            title: sampleQuestions[question].title,
                            answers: {},
                            total: 0,
                            optionColors: getColors(sampleQuestions[question].options.length)
                        }

                        sampleQuestions[question].options.forEach(option => {
                            surveyResult[question].answers[option] = 0
                        })    
                    })

                    Object.keys(surveyData).forEach(anonymous => {
                        const questions = surveyData[anonymous]

                        Object.keys(questions).forEach(question => {
                            const total = questions[question].answer.length
                            surveyResult[question].total += total

                            questions[question].answer.forEach(item => {
                                surveyResult[question].answers[item]++
                            })
                        })
                    })

                    // console.log('sampleQuestions', surveyResult)
                    // console.log('surveyResult', surveyResult)

                    this.setState({ surveyData, surveyResult, surveyTotal })
                }    
            }
        })
        


    }

    render() {
        const { surveyResult, surveyTotal } = this.state

        if (Object.keys(surveyResult).length > 0) {
            return (
                <div className="survey-result-page">
                    <div className="note-panel">
                        <p className="desc">表單填寫人數： {surveyTotal}份</p>
                    </div>
                    
                    <div className="suvey-panel">
                        {
                            Object.keys(surveyResult).map((question, index) => (
                                <div key={question} className="row">
                                    <SurveyQuestion index={index + 1}
                                                    details={surveyResult[question]}
                                                    />
                                    <SurveyChart details={surveyResult[question]}
                                                />      
                                </div>
                            ))
                        }
                    </div>
                </div>
            )
        }
        return null
    }
}


export default SurveyResult;