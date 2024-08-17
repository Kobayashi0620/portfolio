$('#topScroll').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 1500,"easeInOutQuint");
    return false;
});