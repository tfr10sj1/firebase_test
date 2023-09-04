


import firebase from 'firebase/app';
import 'firebase/storage';

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyDI_bZFy1g73Hq_SLZcgy3Y0w4SWPOmAu0",
    authDomain: "sns-jewllery.firebaseapp.com",
    databaseURL: "https://sns-jewllery-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "sns-jewllery",
    storageBucket: "sns-jewllery.appspot.com",
    messagingSenderId: "390632077656",
    appId: "1:390632077656:web:a5b84a0597da42c78c8d2d",
    measurementId: "G-VR33F4VQP4"
};

      // Initialisera Firebase
      firebase.initializeApp(firebaseConfig);

      // Skapa en referens till Firebase Storage-bucketen
      var storage = firebase.storage();
      var storageRef = storage.ref();

      // Hämta referensen till bilden du vill visa
      var imageRef = storageRef.child('images/bild1.jpg');

      // Hämta ner bilden som en URL och visa den på webbsidan
      imageRef.getDownloadURL()
          .then(function (url) {
              var imageElement = document.getElementById('image');
              imageElement.src = url;
          })
          .catch(function (error) {
              console.error("Error getting download URL: ", error);
          });