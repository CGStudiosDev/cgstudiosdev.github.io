var themes = {
  light: {
    logo: "./images/cgstudiosalpha.png",
  },
  dark: {
    logo: "./images/cgstudiosalphadark.png",
  },
};

function switchimg() {
  let [setImageSrc, imageSrc] = [
    document.getElementById("logoimg"),
    document.getElementById("logoimg").src.split("/").slice(-2).join("/"),
  ];

  imageSrc == themes.light.logo.slice(2)
    ? (setImageSrc.src = themes.dark.logo)
    : (setImageSrc.src = themes.light.logo);
}

function home() {
  window.location.assign("/");
}
