window.onload = function () {
    $('.grid-masonry').masonry({
        // options...
        itemSelector: '.grid-item',
        transitionDuration: 250,
        columnWidth: 40,
        gutter: 2,
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
    
}