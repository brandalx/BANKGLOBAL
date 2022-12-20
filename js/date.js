function displayDate() {
  var currentDate = new Date();
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  var dateString = currentDate.toLocaleDateString("en-US", options);
  document.getElementById("current-date").innerHTML = dateString;
}
displayDate();
