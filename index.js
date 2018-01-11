const util = {
    throttle(fn, threshhold, scope) {
        threshhold || (threshhold = 250);
        let last, deferTimer;

        return function (...args) {
            let context = scope || this;
        
            let now = +new Date;
            if (last && now < last + threshhold) {
                // hold on to it
                clearTimeout(deferTimer);
                deferTimer = setTimeout(function () {
                    last = now;
                    fn.apply(context, args);
                }, threshhold);
            } else {
                last = now;
                fn.apply(context, args);
            }
        };
    }
}

// add the eventlistner, which triggers the navigation
window.addEventListener('load', () => {
    let navTrigger = document.querySelector('.nav-trigger');
    let nav = document.querySelector('.nav');
    let wrapper = document.querySelector('.wrapper');

    navTrigger.addEventListener('click', () => {
        navTrigger.classList.toggle('active');
        nav.classList.toggle('active');
        wrapper.classList.toggle('active');
    });
/*
    window.addEventListener('scroll', (evt) => {
        let top = document.querySelector('.top');
        top.style.opacity = 1 - window.scrollY / 250;
        //top.style.backgroundColor = `rgba(0, 0, 0, ${0.4 - window.scrollY / 250})`;

    });
*/
});
