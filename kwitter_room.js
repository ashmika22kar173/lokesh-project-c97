var firebaseConfig = {
    apiKey: "AIzaSyDY65dw1omeb_XpJ4-CRXqx-3lDEOcbjCI",
    authDomain: "kwitter-project-de674.firebaseapp.com",
    databaseURL: "https://kwitter-project-de674-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-de674",
    storageBucket: "kwitter-project-de674.appspot.com",
    messagingSenderId: "101032476108",
    appId: "1:101032476108:web:6ee6caa8bd726c3064f169"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
                console.log("Room Name " + Room_names);
                row = "<div class='room_name' id=" + Room_names + " onclick='moveto(this.id)'>#" + Room_names + "</div><hr>";
                document.getElementById("output").innerHTML += row;

          });
    });
}
getData();

user_name = localStorage.getItem("user_name");
document.getElementById("header").innerHTML = "Welcome" + user_name + "!";

function add_room() {
    user_room = document.getElementById("room_input").value;
    localStorage.setItem("room_input", user_room);

    firebase.database().ref("/").child(user_room).update({
          purpose: "add room name"



    });


}
function moveto(Room){
console.log(Room);
localStorage.setItem("Room_name",Room);
window=location("kwitter_page.html");


}

