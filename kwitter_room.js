
const firebaseConfig = {
      apiKey: "AIzaSyAKT4eRsMxkdP5-haMfg9m5kWfwJnLYDdo",
      authDomain: "kwitter-bacf4.firebaseapp.com",
      databaseURL: "https://kwitter-bacf4-default-rtdb.firebaseio.com",
      projectId: "kwitter-bacf4",
      storageBucket: "kwitter-bacf4.appspot.com",
      messagingSenderId: "465623358537",
      appId: "1:465623358537:web:814636cdb995a6d8537398"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
