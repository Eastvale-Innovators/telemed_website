//Unique Firebase Object
var firebaseConfig = {
  apiKey: "AIzaSyDWwYwLVB2oDx2XZnkF_DHGFKp-nT1dqV0",
  authDomain: "virtual-medical-missions.firebaseapp.com",
  projectId: "virtual-medical-missions",
  storageBucket: "virtual-medical-missions.appspot.com",
  messagingSenderId: "732662445862",
  appId: "1:732662445862:web:3783eeaf29505c950f73e7",
  measurementId: "G-BN7NY1LMDK",
};

//Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

//Variable to access database collection
const db = firestore.collection("contact-us");

//Get Submit Form
let submitButton = document.getElementById("submitbtn");

//Create Event Listener To Allow Form Submission
submitButton.addEventListener("click", (e) => {
  //Prevent Default Form Submission Behavior
  e.preventDefault();

  //Get Form Values
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  firestore.collection("contact-us").get();
  //Save Form Data To Firebase
  db.doc()
    .set({
      Name: name,
      Email: email,
      Message: message,
    })
    .then(() => {})
    .catch((error) => {
      console.log(error);
    });

  //alert
  alert("Your Form Has Been Submitted Successfully");

  //clear form after submission
  function clearForm() {
    document.getElementById("clearFrom").reset();
  }
  clearForm();
});
