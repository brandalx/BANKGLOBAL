function displayValue() {
  // Get references to the elements
  let namee = document.querySelector("#namee");
  let password = document.querySelector("#passworddd");
  let email = document.querySelector("#email");

  let nameeValue = encodeURIComponent(namee.value);

  let emailCheck = false;
  if (
    namee.value.length >= 6 &&
    email.value.indexOf("@") !== -1 &&
    email.value.indexOf(".") !== -1 &&
    email.value.length >= 6
  ) {
    emailCheck = true;
  }

  if (password.value.length > 6 && emailCheck) {
    setTimeout(function () {
      goToLink(nameeValue);
    }, 2000);
    document.querySelector("#informa").innerHTML =
      "Creating account... please wait";
    document.querySelector("#informa").style.color = "green";
  } else if (namee.value.length < 6) {
    document.querySelector("#informa").innerHTML =
      "Looks like you  haven't provided you name correct";
    document.querySelector("#informa").style.color = "orange";
  } else {
    document.querySelector("#informa").innerHTML =
      "Looks like your email / password or name provided is not right. Try refactor your input";
    document.querySelector("#informa").style.color = "red";
  }
}

function goToLink(nameeValue) {
  // Set the location of the current window to the desired link
  window.location.href = "../welcome.html?namee=" + nameeValue;
}
