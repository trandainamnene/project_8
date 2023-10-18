function load(id, url) {
    const tagHTML = document.getElementById(id)
    const cache = localStorage.getItem(url);
    if (cache) {
        tagHTML.innerHTML = cache;
    }
    return fetch(url)
        .then((data) => data.text())
        .then((result) => {
            if (result !== cache) {
                tagHTML.innerHTML = result;
            }
            localStorage.setItem(url, tagHTML.innerHTML);
        })
}

// Light + Dark
async function addEventBtnLightDark() {
    const switchBtn = document.querySelector('.action__switch');
    let srcImg = "";
    switchBtn.onclick = function (e) {
        if (document.documentElement.classList.toggle("dark")) {
            srcImg = "./assests/icons/sun.svg";
        } else {
            srcImg = "./assests/icons/moon.svg";
        };
        console.log(srcImg)
        switchBtn.querySelector('.icon').setAttribute('src' , srcImg);
    }
    console.log(switchBtn.onclick)
}

load("header", "./templates/header.html")
    .then(addEventBtnLightDark);
load("footer", "./templates/footer.html");
