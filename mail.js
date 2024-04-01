const firebaseConfig = {
  //   copy your firebase config informations
  apiKey: "AIzaSyBI27WJ5-IrRp8x42qVcTH-FjUCZlDtaPo",
  authDomain: "indieappdb1.firebaseapp.com",
  databaseURL: "https://indieappdb1-default-rtdb.firebaseio.com",
  projectId: "indieappdb1",
  storageBucket: "indieappdb1.appspot.com",
  messagingSenderId: "261250358064",
  appId: "1:261250358064:web:5e15b0dcf8171dd9f686f5"

};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var indieappdb1 = firebase.database().ref("indieappdb1");

document.getElementById("indieappdb1").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("indieappdb1").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newindieappdb1 = indieappdb1.push();

  newindieappdb1.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
