if(!localStorage.getItem("theme")){
    localStorage.setItem("theme","light");
}

var sun = document.getElementById("sun");
var moon = document.getElementById("moon")
var theme = localStorage.getItem("theme");

var sheet = document.styleSheets[0];
var rules = sheet.cssRules || sheet.rules;

var textColor = rules[2];
var bgColor = rules[3];
var bannerBg = rules[7];

window.onload = function() {
    if(theme === "light"){
        changeThemeToLight();
    }else if(theme === "dark"){
        changeThemeToDark();
    }
    // console.log("Window loaded")
    fadeInPage();
    fadeInBanner();
    fadeInPicture();
    fadeInName();
    fadeInNavBar();
    fadeInIntro();
    fadeInKnowMore();
    new fullpage('#fullpage',{
        autoScrolling: true,
    });
};

function fadeInPage(){
    document.getElementById('page-wrapper').style.opacity = '1';
}

function changeTheme(){
    if(theme === "light"){
        changeThemeToDark();
    }else if(theme === "dark"){
        changeThemeToLight();
    }
}

function changeThemeToDark(){
    theme = "dark"
    localStorage.setItem("theme",theme);
    textColor.style.color = "#ffffff"; //#f2a365
    bgColor.style.background = "#222831";
    bannerBg.style.background = "#222831";
    sun.style.display = "inline-block";
    moon.style.display = "none";
    document.getElementById("themetooltip").innerHTML = "Light Theme";
}

function changeThemeToLight(){
    theme = "light"
    localStorage.setItem("theme",theme);
    textColor.style.color = "#222831";
    bgColor.style.background = "#ffffff";
    bannerBg.style.background = "#ffffff";
    moon.style.display = "inline-block";
    sun.style.display = "none";
    document.getElementById("themetooltip").innerHTML = "Dark Theme";
}

const fadeInBanner = () => {
    anime({
        targets: '.banner',
        opacity: ['0','1'],
        easing: 'easeInOutQuad',
        delay: 100
    });
};

const fadeInPicture = () => {
    anime({
        targets: '.image_canvas',
        opacity: ['0','1'],
        translateY:['100px','0px'],
        easing: 'easeOutExpo',
        duration: 1500,
        delay: 1000
    })
};

const fadeInName = () => {
    anime({
        targets: '.name',
        opacity: ['0','1'],
        translateY:['-100px','0px'],
        easing: 'easeOutExpo',
        duration: 1500,
        delay: 1200
    })
};

const fadeInNavBar = () => {
    anime({
        targets: '.navbar',
        opacity: ['0','1'],
        easing: 'easeInOutQuad',
        delay: 1400
    });
};

const fadeInIntro = () => {
    anime({
        targets: '.profile_intro',
        opacity: ['0','1'],
        easing: 'easeInOutQuad',
        delay: 1400
    });
}

const fadeInKnowMore = () => {
    anime({
        targets: '.scroll_banner',
        opacity: ['0','1'],
        translateY:['100px','0px'],
        easing: 'easeOutExpo',
        duration: 1500,
        delay: 2000
    })
}