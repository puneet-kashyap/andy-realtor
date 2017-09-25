import firebase from 'firebase'
import firebaseui from 'firebaseui'

var config = {
  apiKey: "AIzaSyAp31xtPj8X83TEBnvAk9Du6s-xqw3PkGM",
  authDomain: "andy-realtor.firebaseapp.com",
  databaseURL: "https://andy-realtor.firebaseio.com",
  projectId: "andy-realtor",
  storageBucket: "andy-realtor.appspot.com",
  messagingSenderId: "298741757421"
};
export const fire = firebase.initializeApp(config);

export const fireUI = () => {
var uiConfig = {
  signInSuccessUrl: '/Welcome',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.PhoneAuthProvider.PROVIDER_ID
  ],
  tosUrl: '/',
  credentialHelper: firebaseui.auth.CredentialHelper.NONE,
  signInFlow: 'popup',
};
var ui = new firebaseui.auth.AuthUI(firebase.auth());
ui.start('#firebaseui-auth-container', uiConfig);
}

 firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log(`${user.displayName} Signed In`);
      document.getElementById('sign-in-status').textContent = 'Sign Out';
    } else {
      console.log(`User Signed Out`);
      document.getElementById('sign-in-status').textContent = 'Sign In';
    }
  });

export const signOut = () => {
  firebase.auth().signOut().then( () => {
    localStorage.clear();
    window.location = '/'
  }, (error) => {
    console.error('Sign Out Error', error);
  });
}

export const fireLocal = () => {
  return JSON.parse(localStorage.getItem('firebase:authUser:AIzaSyAp31xtPj8X83TEBnvAk9Du6s-xqw3PkGM:[DEFAULT]'))
}

export const signIn = () => {
  window.location = '/SignIn'
}
