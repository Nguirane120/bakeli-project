import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
//import firebase from "firebase"



const config = {
    apiKey: "AIzaSyA1mOh2IWpqQjKCGgWTK-ojttglwyrjR7U",
    authDomain: "tache-21.firebaseapp.com",
    databaseURL: "https://tache-21-default-rtdb.firebaseio.com",
    projectId: "tache-21",
    storageBucket: "tache-21.appspot.com",
    messagingSenderId: "380978163478",
    appId: "1:380978163478:web:03fc7bdab33cd222d96a37"
}
{/*var firebaseConfig = {
    apiKey: "AIzaSyA1mOh2IWpqQjKCGgWTK-ojttglwyrjR7U",
    authDomain: "tache-21.firebaseapp.com",
    databaseURL: "https://tache-21-default-rtdb.firebaseio.com",
    projectId: "tache-21",
    storageBucket: "tache-21.appspot.com",
    messagingSenderId: "380978163478",
    appId: "1:380978163478:web:03fc7bdab33cd222d96a37"
  };
  firebase.initializeApp(firebaseConfig);*/}


class Firebase{
    constructor(){
        app.initializeApp(config);
        this.auth = app.auth();

        this.db = app.database();
    }

    signUpser = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email,  password)

    loginUser = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password)

    // doSignOut = ()=> this.auth.signOut()

    // doPasswordReset = email => this.auth.sendPasswordResetEmail(email)

    // doPasswordUpdate = password =>
    //   this.auth.currentUser.updatePassword(password)


    
      user = uid => this.db.ref(`users/${uid}`);

      


}


export default Firebase;