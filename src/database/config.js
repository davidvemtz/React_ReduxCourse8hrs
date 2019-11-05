import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBsROGfUw9VDm8SVRBVFbnGLXGHZ_xfif8",
    authDomain: "photowall-488f1.firebaseapp.com",
    databaseURL: "https://photowall-488f1.firebaseio.com",
    projectId: "photowall-488f1",
    storageBucket: "photowall-488f1.appspot.com",
    messagingSenderId: "1056657555366",
    appId: "1:1056657555366:web:8ef261614102d205aad967"
  };

firebase.initializeApp(config);

const database = firebase.database();

export {database};