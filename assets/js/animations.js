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

const fadeInSunCloud = () => {
    anime({
        targets: '.suncloud',
        opacity: ['0','1'],
        easing: 'easeInOutQuad'
    })
}