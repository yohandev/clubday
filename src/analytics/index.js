import firebase from "firebase/app"

// services we're using...
import "firebase/analytics"

const Analytics =
{
    init: () =>
    {
        // initialize Firebase
        firebase.initializeApp
        ({
            apiKey: "AIzaSyBFLD7Rq0KCcQaRCMe8AUoVnRflMZE1Vhs",
            authDomain: "clubday-df776.firebaseapp.com",
            databaseURL: "https://clubday-df776.firebaseio.com",
            projectId: "clubday-df776",
            storageBucket: "clubday-df776.appspot.com",
            messagingSenderId: "685788159446",
            appId: "1:685788159446:web:bc83265e01a13dc5915877",
            measurementId: "G-JB1GWZ4M04"
        })

        // initialize services we're using
        firebase.analytics()
    }
}

export default Analytics;