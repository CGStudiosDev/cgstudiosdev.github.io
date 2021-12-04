const themes = {
    light: {
        logo: "images/cgstudiosalpha.png",
    },
    dark: {
        logo: "images/cgstudiosalphadark.png",
    }
}

function switchimg()
{
    let imageSrc = document.getElementById('logoimg').src;
    imageSrc == themes.light.logo ? imageSrc = themes.dark.logo : imageSrc= themes.light.logo;
}

function home() {
    window.location.assign("/")
}
