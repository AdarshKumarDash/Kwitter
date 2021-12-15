var firebaseConfig = {
      apiKey: "AIzaSyDrseIFc0qvx1znhuQMlBAQP17Lq_sYFdU",
      authDomain: "kwitter-90194.firebaseapp.com",
      databaseURL: "https://kwitter-90194-default-rtdb.firebaseio.com",
      projectId: "kwitter-90194",
      storageBucket: "kwitter-90194.appspot.com",
      messagingSenderId: "402090926668",
      appId: "1:402090926668:web:efb713d564296ea7f80ae9",
      measurementId: "${config.measurementId}"
};
firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("UserName");
document.getElementById("username").innerHTML = "Welcome &nbsp;" + username + "!";

function addroom() {
      roomname = document.getElementById("input_room_name").value;
      firebase.database().ref("/").child(roomname).update({
            Purpose: "Adding Room"
      });
      localStorage.setItem("Room Name", roomname);
      window.location = "kwitter_page.html";
}







function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code

                  //End code
            });
      });
}
getData();