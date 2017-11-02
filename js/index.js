import '../sass/customize.sass'
import '../css/style.css'
import '../node_modules/animate.css/animate.min.css'

var $ = require("jquery");
var Vue = require('vue');
var axios = require('axios');

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
    // Vue
    var app = new Vue({
        el: '#information',
        data: {
            url: 'https://blog.go-sign.info/',
            posts: [],
            errors: []
        },
        created() {
            axios.get(this.url + 'wp-json/wp/v2/posts?per_page=10')
            .then(response => {
                this.posts = response.data;
                for (var post of this.posts) {
                    let date = new Date(post.date);
                    let year = date.getFullYear();
                    let month = ("0" + date.getMonth()).slice(-2);
                    let day = ("0" + date.getDate()).slice(-2);
                    post.post_date = year + '/' + month + '/' + day;
                }
            })
            .catch(e => {
                this.errors.push(e)
            });
        }
    })
});

