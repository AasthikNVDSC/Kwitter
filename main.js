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
 
function addUser(){
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);
    window.location = "kwitter_room.html";
}
