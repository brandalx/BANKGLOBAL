function displayValue() {
  // Get references to the elements
  let password = document.querySelector("#passworddd");
  let email = document.querySelector("#email");
  let emailValue = encodeURIComponent(email.value);

  let emailCheck = false;
  if (
    email.value.indexOf("@") !== -1 &&
    email.value.indexOf(".") !== -1 &&
    email.value.length >= 6
  ) {
    emailCheck = true;
  }

  if (password.value.length > 6 && emailCheck) {
    setTimeout(function () {
      goToLink(emailValue);
    }, 2000);
    document.querySelector("#informa").innerHTML =
      "Entering process... please wait";
    document.querySelector("#informa").style.color = "green";
  } else {
    document.querySelector("#informa").innerHTML =
      "Looks like your email or password is worng. Check out if you missed any symbols there";
    document.querySelector("#informa").style.color = "red";
  }
}

function goToLink(emailValue) {
  // Set the location of the current window to the desired link
  window.location.href = "../welcome.html?email=" + emailValue;
}
