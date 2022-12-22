window.onscroll = function () {
  var scrollDistance = document.body.scrollHeight - window.innerHeight;
  var currentScrollPosition = window.pageYOffset;
  document.getElementById("loadingLine").style.width =
    (currentScrollPosition / scrollDistance) * 100 + "%";

  if (currentScrollPosition === scrollDistance) {
    document.getElementById("loadingLine").style.width = "100%";
  }
};
