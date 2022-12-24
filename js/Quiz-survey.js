const radioGroup = document.querySelector("ul.list-group");
radioGroup.addEventListener("change", (event) => {
  const check = event.target.value;
  console.log(check); // logs the value of the selected radio button
});

const check = document.querySelector(
  'input[name="listGroupRadio"]:checked'
).value;
