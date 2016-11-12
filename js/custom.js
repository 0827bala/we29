// Custom Jquery and javascript

$(document).ready(function() {
    $('.mobileMenuLaunch').on('click', function() {
        $('.mbMenu').addClass('active');
    });
    $('.mbmenuClose').on('click', function() {
        $('.mbMenu').removeClass('active');
    });
});