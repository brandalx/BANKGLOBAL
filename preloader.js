if (!localStorage.getItem("executed")) {
  setTimeout(function () {
    window.location.href = "./index.html";
  }, 2000);
  localStorage.setItem("executed", false);
}
