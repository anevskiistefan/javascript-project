var registerButton = document.querySelector(".register");
var loginButton = document.querySelector(".login");
var input1 = document.getElementsByTagName("input")[0];
var input2 = document.getElementsByTagName("input")[1];
var ol = document.querySelector("ol");
var a = document.querySelectorAll("a");
var users = [];
var userUsername;
var userPassword;


// FUNCTIONS

registerButton.addEventListener("click", function () {
  userUsername = prompt("What will be your username?");
  userPassword = prompt("What will be your password?");

  users.push({
    username: userUsername,
    password: userPassword
  });
  addLink();
});

function addLink() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(userUsername));
  ol.appendChild(li);
}


loginButton.addEventListener("click", function () {
  login();
});




function login() {
  if (input1.value.length === 0 || input2.value.length === 0) {
    return alert("Please write your username and password");
  } else {
    for (var i = 0; i < users.length; i++) {
      if (input1.value.toLowerCase() === users[i].username && input2.value.toLowerCase() === users[i].password) {
        input1.value = "";
        input2.value = "";
        return alert("Successfully loged in!");
      }
    }
    input1.value = "";
    input2.value = "";
    return alert("Try again!");
  }
}


