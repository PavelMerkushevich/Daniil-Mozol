window.onload = function () {
    $('.grid-masonry-style').css({
        'display': 'flex'
    });
    $('.books-grid').masonry({
        // options...
        itemSelector: '.grid-item',
        transitionDuration: 250,
        columnWidth: 220,
        gutter: 1,
        percentPosition: true
    });
    $('.load-animation-container').css({
        'display': 'none'
    });

}