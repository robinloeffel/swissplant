import $ from 'jquery';

let rotateCount = 1;

setInterval(() => {
    rotate();
}, 7500);

const rotate = () => {
    if ($(document).width() > 1200) {
        switch (rotateCount) {
            case 1:
                $('.cover-parent-background.rotate.one').removeClass('top');
                $('.cover-parent-background.rotate.two').addClass('top');
                rotateCount++;
                break;
            case 2:
                $('.cover-parent-background.rotate.two').removeClass('top');
                $('.cover-parent-background.rotate.three').addClass('top');
                rotateCount++;
                break;
            case 3:
                $('.cover-parent-background.rotate.three').removeClass('top');
                $('.cover-parent-background.rotate.one').addClass('top');
                rotateCount = 1;
                break;
        }
    }
};

$('[data-scroll-target]').click((event) => {
    event.preventDefault();
    let scrollTarget = '#' + event.target.dataset.scrollTarget;
    let navHeight = $('nav.desktop-nav').outerHeight();
    $('html, body').animate({
        scrollTop: $(scrollTarget).offset().top - navHeight
    }, 500);
});

$('li.mobile-menu').click(() => {
    $('nav.mobile-nav').css({
        transform: 'none'
    });
    $('nav.mobile-nav').addClass('open');
});

$('.close-mobile-nav').click((event) => {
    event.preventDefault();
    $('nav.mobile-nav').css({
        transform: 'translateX(101vw)'
    });
    $('nav.mobile-nav').removeClass('open');
});
