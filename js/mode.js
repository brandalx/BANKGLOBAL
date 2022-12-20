function init() {
  const lightColors = {
    yellow: "#ffb444",
    blackMain: "#3b414b",
    headingMain: "#2c3136",
    paragraphMain: "#262626",
    paragraphSecondary: "#686868",
    paragraphTurtary: "#afafaf",
    whites: "#ffffff",
  };

  // Define the colors for dark mode
  const darkColors = {
    yellow: "#2667ff",
    blackMain: "#ffffff",
    headingMain: "#ffffff",
    paragraphMain: "#ffffff",
    paragraphSecondary: "#686868",
    paragraphTurtary: "#ffffff",
    whites: "#2c3136",
  };

  function applyColors(colors) {
    document.documentElement.style.setProperty("--yellow", colors.yellow);
    document.documentElement.style.setProperty("--blackMain", colors.blackMain);
    document.documentElement.style.setProperty(
      "--headingMain",
      colors.headingMain
    );
    document.documentElement.style.setProperty(
      "--paragraphMain",
      colors.paragraphMain
    );
    document.documentElement.style.setProperty(
      "--paragraphSecondary",
      colors.paragraphSecondary
    );
    document.documentElement.style.setProperty(
      "--paragraphTurtary",
      colors.paragraphTurtary
    );
    document.documentElement.style.setProperty("--whites", colors.whites);
  }

  let button = document.querySelector("#mode-toggle");
  button.addEventListener("click", () => {
    if (button.innerHTML === "Dark") {
      applyColors(lightColors);
      button.innerHTML = "Light";
    } else {
      applyColors(darkColors);
      button.innerHTML = "Dark";
    }
  });
  displayDate();
  currency();
}

init();
