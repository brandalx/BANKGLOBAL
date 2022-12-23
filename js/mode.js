function init() {
  const lightColors = {
    yellow: "#ffb444",
    blackMain: "#3b414b",
    headingMain: "#2c3136",
    paragraphMain: "#262626",
    paragraphSecondary: "#686868",
    paragraphTurtary: "#afafaf",
    whites: "#ffffff",
    whitesreversed: "#3a3a3a",
    // bg: "#3f3f3f",
  };
  const darkColors = {
    yellow: "#2667ff",
    blackMain: "#ffffff",
    headingMain: "#ffffff",
    paragraphMain: "#ffffff",
    paragraphSecondary: "#686868",
    paragraphTurtary: "#ffffff",
    whites: "#2c3136",
    whitesreversed: "#ffffff",
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
  }
  let isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  let currentTheme = isDarkTheme ? "dark" : "light";
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
  });

  // const savedTheme = localStorage.getItem("theme");
  // if (savedTheme) {
  //   // If a theme is saved, apply it
  //   applyColors(savedTheme === "dark" ? lightColors : darkColors);
  //   currentTheme = savedTheme;
  // } else {
  //   // If no theme is saved, use the user's preferred color scheme
  //   if (currentTheme === "dark") {
  //     applyColors(lightColors);
  //   } else {
  //     applyColors(darkColors);
  //   }
  // }

  // button.addEventListener("click", () => {
  //   if (currentTheme === "light") {
  //     playAudioOn();
  //     applyColors(lightColors);
  //     currentTheme = "dark";
  //     button.innerHTML = "Light";
  //     // Save the dark theme in localStorage
  //     localStorage.setItem("theme", "dark");
  //   } else {
  //     playAudioOff();
  //     applyColors(darkColors);
  //     currentTheme = "light";
  //     button.innerHTML = "Dark";
  //     // Save the light theme in localStorage
  //     localStorage.setItem("theme", "light");
  //   }
  // });

  // Add a listener for changes in the user's preferred color scheme
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
  //  button.addEventListener("click", () => {
  //   if (currentTheme === "light") {
  //     playAudioOn();
  //     applyColors(lightColors);
  //     currentTheme = "dark";
  //     button.innerHTML = "Light";
  //     // Save the dark theme in localStorage
  //     localStorage.setItem("theme", "dark");
  //   } else {
  //     playAudioOff();
  //     applyColors(darkColors);
  //     currentTheme = "light";
  //     button.innerHTML = "Dark";
  //     // Save the light theme in localStorage
  //     localStorage.setItem("theme", "light");
  //   }
  // });
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
