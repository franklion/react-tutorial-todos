import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp(
    {
        apiKey: "AIzaSyBi5nGdvmbPDWjChMfhHVulzS5C_MzcM20",
        authDomain: "lunch-survey.firebaseapp.com",
        databaseURL: "https://lunch-survey.firebaseio.com",
    }
)

const base = Rebase.createClass(firebaseApp.database())

export default base