import '../sass/customize.sass'
import '../css/style.css'
import '../node_modules/animate.css/animate.min.css'

var $ = require("jquery");

$(function() {
    // smooth scroll
    $('a[href^="#"]').click(function() {
        var speed = 500;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
    });
    // hamburger menu
    (function() {
        var burger = document.querySelector('.nav-toggle');
        var menu = document.querySelector('.nav-menu');
        burger.addEventListener('click', function() {
            burger.classList.toggle('is-active');
            menu.classList.toggle('is-active');
        });
    })();
    // animate
    $('h1.title, .gototop').hover(function(e) {
        $(this).addClass('animated rubberBand');
    });
    $('h1.title, .gototop').bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass('animated rubberBand');
    });
});

