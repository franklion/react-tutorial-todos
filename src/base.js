import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp(
    {
        apiKey: "AIzaSyBi5nGdvmbPDWjChMfhHVulzS5C_MzcM20",
        authDomain: "lunch-survey.firebaseapp.com",
        databaseURL: "https://lunch-survey.firebaseio.com",
    }
)

const base = Rebase.createClass(firebaseApp.database())

export default base