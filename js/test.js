const lightColors = {
  yellow: "#ffb444",
  blackMain: "#3b414b",
  headingMain: "#2c3136",
  paragraphMain: "#262626",
  paragraphSecondary: "#686868",
  paragraphTurtary: "#afafaf",
  whites: "#ffffff",
  whitesreversed: "#3a3a3a",
  primary: "#ffb444",
  primarylight: "#ffb444",
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
}
