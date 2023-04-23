
var firebaseConfig = {
      apiKey: "AIzaSyD-IWhoZ5Cs8894SYZ7KUzkHs5dNYwZrYY",
      authDomain: "classtest-ab288.firebaseapp.com",
      databaseURL: "https://classtest-ab288-default-rtdb.firebaseio.com",
      projectId: "classtest-ab288",
      storageBucket: "classtest-ab288.appspot.com",
      messagingSenderId: "147367630308",
      appId: "1:147367630308:web:11028c90c5c3288c53e3f1"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_names);
      row = "<div class='room_name' id ="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database(). ref("/").child("room_name").update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
       window.location = "kwitter_page.html"
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
       window.location = ("index.html");
}


function send() 
{
     msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
           name:user_name,
           message:msg,
           like:0
      });

      document.getElementById("msg").value = ""
}
