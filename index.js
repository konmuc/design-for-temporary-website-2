window.addEventListener('load', () => {

    // select some HTMLElements
    let navTrigger = document.querySelector('.nav-trigger');
    let nav = document.querySelector('.nav');
    let wrapper = document.querySelector('.wrapper');

    // add eventlistener, which triggers the navigation
    navTrigger.addEventListener('click', () => {
        navTrigger.classList.toggle('active');
        nav.classList.toggle('active');
        wrapper.classList.toggle('active');
    });

});
