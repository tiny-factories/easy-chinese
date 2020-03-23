/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

// userbase.init({ appId: "4d624c66-eb9b-4561-87e0-bc962e0d6d08" });
// userbase.init({ appId: 'd675e83d-ac74-4b5e-b532-c265a573e2c3' })

userbase
  .init({ appId: '4d624c66-eb9b-4561-87e0-bc962e0d6d08' })
 .then((session) => session.user ? showTodos(session.user.username) : showAuth())
      .catch(() => showAuth());

function handleLogin(e) {
  e.preventDefault();

  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  userbase
    .signIn({ username, password, rememberMe: 'local' })
    .then(user => showTodos(user.username))
    .catch(e => (document.getElementById("login-error").innerHTML = e));
}

function handleLogout() {
  userbase
    .signOut()
    .then(() => showAuth())
    .catch(e => (document.getElementById("logout-error").innerText = e));
}

function handleSignUp(e) {
  e.preventDefault();
  const username = document.getElementById("signup-username").value;
  const password = document.getElementById("signup-password").value;

  userbase
    .signUp({ username, password, rememberMe: 'local' })

    .then(user => showTodos(user.username))

    .catch(e => (document.getElementById("signup-error").innerHTML = e));
}

function showTodos(username) {
  console.log("User Logged In");
  document.getElementById('logged-out-view').style.display = "none";
  document.getElementById('logged-in-view').style.display = "block";

  // reset the todos view
  document.getElementById("username").innerHTML = username;
  document.getElementById("todos").innerText = "";
  document.getElementById("db-loading").style.display = "block";
  document.getElementById("db-error").innerText = "";

  // userbase
  //   .openDatabase({ databaseName: "todos", changeHandler })
  //   .catch(e => (document.getElementById("db-error").innerText = e));
}
function showAuth() {
  console.log("User Logged Out");

  document.getElementById('logged-in-view').style.display = "none";
  document.getElementById('logged-out-view').style.display = "block";
  document.getElementById("login-username").value = "";
  document.getElementById("login-password").value = "";
  document.getElementById("login-error").innerText = "";
  document.getElementById("signup-username").value = "";
  document.getElementById("signup-password").value = "";
  document.getElementById("signup-error").innerText = "";
}

document.getElementById("login-form").addEventListener("submit", handleLogin);
document.getElementById("signup-form").addEventListener("submit", handleSignUp);



document
  .getElementById("logout-button")
  .addEventListener("click", handleLogout);

document.getElementById('logged-in-view').style.display = "none";
document.getElementById('logged-out-view').style.display = "none";
