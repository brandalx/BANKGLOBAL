function init() {
  const lightColors = {
    yellow: "#ffb444",
    // yellow: "#40916c",
    blackMain: "#3b414b",
    headingMain: "#2c3136",
    paragraphMain: "#262626",
    paragraphSecondary: "#686868",
    paragraphTurtary: "#afafaf",
    whites: "#ffffff",
    whitesreversed: "#3a3a3a",
    primary: "#ffb444",
    primarylight: "#ffb444",
    blackMain2: "#ffffff",
    // bg: "#3f3f3f",
  };
  const darkColors = {
    blackMain2: "#3b414b",
    yellow: "#2667ff",
    blackMain: "#ffffff",
    headingMain: "#ffffff",
    paragraphMain: "#ffffff",
    paragraphSecondary: "#686868",
    paragraphTurtary: "#ffffff",
    whites: "#2c3136",
    whitesreversed: "#ffffff",
    primaryreversed: "#2667ff",
    primarylightreversed: "#2667ff",
    // bg: "#ffffff",
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
    document.documentElement.style.setProperty("--bg", colors.bg);
    document.documentElement.style.setProperty(
      "--whitesreversed",
      colors.whitesreversed
    );
    document.documentElement.style.setProperty(
      "--primary",
      colors.primaryreversed
    );
    document.documentElement.style.setProperty(
      "--primary-light",
      colors.primarylightreversed
    );
    document.documentElement.style.setProperty(
      "--blackMain2",
      colors.blackMain2
    );
    document.documentElement.style.setProperty(
      "--headingMain2",
      colors.headingMain2
    );
  }
  let isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  let currentTheme = sessionStorage.getItem("theme");
  if (currentTheme === null) {
    currentTheme = isDarkTheme ? "dark" : "light";
  }
  if (currentTheme === "dark") {
    applyColors(lightColors);
  } else {
    applyColors(darkColors);
  }

  let button = document.querySelector("#mode-toggle");
  // Set the innerHTML of the button based on the current theme
  button.innerHTML = currentTheme === "dark" ? "Light" : "Dark";
  button.addEventListener("click", () => {
    if (currentTheme === "light") {
      playAudioOn();
      applyColors(lightColors);
      currentTheme = "dark";
      button.innerHTML = "Light";
    } else {
      playAudioOff();
      applyColors(darkColors);
      currentTheme = "light";
      button.innerHTML = "Dark";
    }
    sessionStorage.setItem("theme", currentTheme);
  });

  const colorSchemeQuery = window.matchMedia("(prefers-color-scheme: dark)");
  colorSchemeQuery.addListener((e) => {
    if (e.matches) {
      applyColors(lightColors);
      currentTheme = "dark";
      button.innerHTML = "Light";
    } else {
      applyColors(darkColors);
      currentTheme = "light";
      button.innerHTML = "Dark";
    }
  });

  displayDate();
  currency();
  login();
}
init();

function playAudioOn() {
  var audio = document.getElementById("myAudioOn");
  audio.play();
}

function playAudioOff() {
  var audio = document.getElementById("myAudioOff");
  audio.play();
}
