mainAnimation = () => {
    let tl = gsap.timeline();
    tl.from('.main_wrapper', {
        duration: 1,
        y: 0,
        opacity: 0,
        stagger: {
            amount: .4
        },
        delay: .2
    });
};

mainAnimation();