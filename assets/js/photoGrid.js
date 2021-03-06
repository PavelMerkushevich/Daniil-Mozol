window.onload = function () {
    $('.grid-masonry-style').css({
        'display': 'flex'
    });
    $('.grid-masonry').masonry({
        // options...
        itemSelector: '.grid-item',
        transitionDuration: 250,
        columnWidth: 220,
        gutter: 1,
        percentPosition: true
    });
    $('.grid-masonry-2').masonry({
        // options...
        itemSelector: '.grid-item-2',
        transitionDuration: 250,
        columnWidth: 20,
        gutter: 2,
        percentPosition: true
    });
    $('.load-animation-container').css({
        'display': 'none'
    });
    
}