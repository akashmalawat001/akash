const firebaseConfig = {
    apiKey: "AIzaSyBxjBLSh5L8fS4Ha4jHAnClXWq45Xxvx_g",
    authDomain: "contact-form-61db0.firebaseapp.com",
    databaseURL: "https://contact-form-61db0-default-rtdb.firebaseio.com",
    projectId: "contact-form-61db0",
    storageBucket: "contact-form-61db0.firebasestorage.app",
    messagingSenderId: "1006864220190",
    appId: "1:1006864220190:web:e79d3592142b3c1b6b2e0f",
    measurementId: "G-RE4V15HV8J"
  };
// initialize firebase
  firebaseConfig.initializeApp(firebaseConfig);

  // referance your database
 var contactFormDB = firebase.database().ref('contactForm');

 document.getElementById('contactFrom').addEventListener('submit', submitForm);

 function submitForm(e){
  e.preventDefault();
  var name = getElementVal('contact-name');
  var emailid =getElementVal('contact-email');
  var msgContent = getElementVal ('contact-message');


    console.log(name, emailid ,msgContent);
}

const getElementVal = (id) => {
    return document .getElementById(id).value;
};