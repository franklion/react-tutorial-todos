const questions = {
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
}

export default questions;