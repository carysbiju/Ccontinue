firebaseConfig = {
  apiKey: "AIzaSyAfF3dnMy3s0ezcY1DCAPz5VM5yt7ZHdes",
  authDomain: "class-test-e11a3.firebaseapp.com",
  projectId: "class-test-e11a3",
  storageBucket: "class-test-e11a3.appspot.com",
  messagingSenderId: "449450885152",
  appId: "1:449450885152:web:640908da08918e00b2fc45",
  measurementId: "G-74QB2QC8W9"
};

//ADD YOUR FIREBASE LINKS HERE

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
  firebase_message_id = childKey;
  message_data = childData;
function send(){
msg=document.getElementById("msg").value ;
firebase.database().ref(room_name).push({
     name:user_name,
     message:msg,
     like:0
});
}

//End code
} });  }); }
getData();

