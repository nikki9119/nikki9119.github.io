if(!localStorage.getItem("theme")){
    localStorage.setItem("theme","light");
}

var sun = document.getElementById("sun");
var moon = document.getElementById("moon")
var theme = localStorage.getItem("theme");

var sheet = document.styleSheets[3];
var rules = sheet.cssRules || sheet.rules;

var textColor = rules[0];
var bgColor = rules[1];
var bannerBg = rules[2];
var iconColor = rules[3];
var cardBg = rules[4];
var timelineBg = rules[5];
var timelineEventBg = rules[6];

fetch("https://quotes.rest/qod",{
    method: "GET"
})
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }
      response.json().then(function(data) {
        console.log(data);
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });

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
    fadeInProfileTray();
    // new fullpage('#fullpage',{
    //     autoScrolling: true,
    // });
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
    cardBg.style.background = "#696969";
    iconColor.style.fill = "#ffffff";
    timelineBg.style["border-left"] = "3px solid #ffffff";
    timelineEventBg.style["background"] = "#ffffff";
    timelineEventBg.style["border"] = "2px solid #222831";
    sun.style.display = "inline-block";
    moon.style.display = "none";
    document.getElementById("themetooltip").innerHTML = "Light Theme";
}

function changeThemeToLight(){
    theme = "light"
    localStorage.setItem("theme",theme);
    textColor.style.color = "#222831";
    bgColor.style.background = "#f3f2ef";
    bannerBg.style.background = "#f3f2ef";
    cardBg.style.background = "#ffffff";
    iconColor.style.fill = "#222831";
    timelineBg.style["border-left"] = "3px solid #222831";
    timelineEventBg.style["background"] = "#222831";
    timelineEventBg.style["border"] = "2px solid #f3f2ef";
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
        duration: 2000,
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

const fadeInProfileTray = () => {
    anime({
        targets: '.profiletray',
        opacity: ['0','1'],
        duration: 1500,
        easing: 'easeInOutQuad',
        delay: 2000
    })
}