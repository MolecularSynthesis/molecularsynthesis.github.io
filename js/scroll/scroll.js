// scrolldown oltre la copertina
$(".scrollDown").click(function() {
    $('html, body').animate({
        scrollTop: $("#skip").offset().top
    }, 850);
});