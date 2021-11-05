const firebaseConfig = 
{ apiKey: "AIzaSyD69C6XcjZJaCaeVLddqI54QamnepYbUiU", 
authDomain: "kkwitter-fe61a.firebaseapp.com", 
databaseURL: "https://kkwitter-fe61a-default-rtdb.firebaseio.com",
projectId: "kkwitter-fe61a", 
storageBucket: "kkwitter-fe61a.appspot.com", 
messagingSenderId: "463233494317", 
appId: "1:463233494317:web:8fec1762078304053677a4" }; 


// Initialize Firebase
 const app = initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome "+ user_name + "!!!!" ;

    function addRoom(){
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({ 
                purpose : "adding room name" });
           localStorage.setItem("room_name",room_name);
           window.location = "kwitter_msg_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) 
{document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names);
      row = "<div class = 'room_name' id ="+Room_names+" onclick = 'redierectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redierectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}
function logout(){
localStorage.removeItem(room_name);
localStorage.removeItem(user_name);
window.location = index.html;
}
