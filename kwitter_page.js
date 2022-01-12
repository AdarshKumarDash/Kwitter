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
room_name = localStorage.getItem("RoomName");
document.getElementById("roomnameint").innerHTML = room_name;

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:username, message:msg, like:0
      });
      document.getElementById("msg").value = "";
}

function logout() {
      localStorage.removeItem("RoomName");
      localStorage.removeItem("UserName");
      window.location = "index.html";
}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();