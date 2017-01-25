// get the value of the bottom of the #main element by adding the offset of that element plus its height, set it as a variable
var mainbottom = $('.copertina').offset().top + $('.copertina').height();

// on scroll, 
$(window).on('scroll',function(){

    // we round here to reduce a little workload
    stop = Math.round($(window).scrollTop());
    if (stop > mainbottom) {
        $('.navbar').addClass('past-main');
        $('.menu').removeClass('inverse');
        $('.menu2').removeClass('nav-title-inverse');
        $('.menu2').addClass('nav-title');
    } else {
        $('.navbar').removeClass('past-main');
        $('.menu').addClass('inverse');
        $('.menu2').addClass('nav-title-inverse');
        $('.menu2').removeClass('nav-title');
   }

});