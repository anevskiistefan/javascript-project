var registerButton = document.querySelector(".register");
var usersButton = document.querySelector(".users");
var loginButton = document.querySelector(".login");
var input1 = document.getElementsByTagName("input")[0];
var input2 = document.getElementsByTagName("input")[1];
var ol = document.querySelector("ol");
var users = [];
var userUsername;
var userPassword;

registerButton.addEventListener("click", function() {
  userUsername = prompt("What will be your username?");
  userPassword = prompt("What will be your password?");

  users.push({
    username: userUsername,
    password: userPassword
  });

  addToUl()

});

function addToUl() {
  var li = document.createElement("li");                 
  li.appendChild(document.createTextNode(userUsername));         
  ol.appendChild(li);     
}

loginButton.addEventListener("click", function() {
  if (input1.value.length === 0 || input2.value.length === 0) {
    return alert("Please write your username and password");
  } else {
    for(var i=0; i < users.length; i++) {
      if(input1.value === users[i].username && input2.value === users[i].password) {
        input1.value = "";
        input2.value = "";
        return alert("Successfully loged in!");
      }
    }
        input1.value = "";
        input2.value = "";
    return alert("Try again!");
    }
});

usersButton.addEventListener("click", function() {
  console.log(users);
});
