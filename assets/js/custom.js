(function ($) {
	
	"use strict";

	$(function() {
        $("#tabs").tabs();
    });

	$(window).scroll(function() {
	  var scroll = $(window).scrollTop();
	  var box = $('.header-text').height();
	  var header = $('header').height();

	  if (scroll >= box - header) {
	    $("header").addClass("background-header");
	  } else {
	    $("header").removeClass("background-header");
	  }
	});
	

	$('.schedule-filter li').on('click', function() {
        var tsfilter = $(this).data('tsfilter');
        $('.schedule-filter li').removeClass('active');
        $(this).addClass('active');
        if (tsfilter == 'all') {
            $('.schedule-table').removeClass('filtering');
            $('.ts-item').removeClass('show');
        } else {
            $('.schedule-table').addClass('filtering');
        }
        $('.ts-item').each(function() {
            $(this).removeClass('show');
            if ($(this).data('tsmeta') == tsfilter) {
                $(this).addClass('show');
            }
        });
    });


	// Window Resize Mobile Menu Fix
	mobileNav();


	// Scroll animation init
	window.sr = new scrollReveal();
	

	// Menu Dropdown Toggle
	if($('.menu-trigger').length){
		$(".menu-trigger").on('click', function() {	
			$(this).toggleClass('active');
			$('.header-area .nav').slideToggle(200);
		});
	}


	$(document).ready(function () {
	    $(document).on("scroll", onScroll);
	    
	    //smoothscroll
	    $('.scroll-to-section a[href^="#"]').on('click', function (e) {
	        e.preventDefault();
	        $(document).off("scroll");
	        
	        $('a').each(function () {
	            $(this).removeClass('active');
	        })
	        $(this).addClass('active');
	      
	        var target = this.hash,
	        menu = target;
	       	var target = $(this.hash);
	        $('html, body').stop().animate({
	            scrollTop: (target.offset().top) + 1
	        }, 500, 'swing', function () {
	            window.location.hash = target.attr('id'); // ✅ Menggunakan atribut 'id' sebagai string
	            $(document).on("scroll", onScroll);
	        });
	    });
	});

	function onScroll(event){
	    var scrollPos = $(document).scrollTop();
	    $('.nav a').each(function () {
	        var currLink = $(this);
	        var refElement = $(currLink.attr("href"));
	        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
	            $('.nav ul li a').removeClass("active");
	            currLink.addClass("active");
	        }
	        else{
	            currLink.removeClass("active");
	        }
	    });
	}


	// Page loading animation
	 $(window).on('load', function() {

        $('#js-preloader').addClass('loaded');

    });


	// Window Resize Mobile Menu Fix
	$(window).on('resize', function() {
		mobileNav();
	});


	// Window Resize Mobile Menu Fix
	function mobileNav() {
		var width = $(window).width();
		$('.submenu').on('click', function() {
			if(width < 767) {
				$('.submenu ul').removeClass('active');
				$(this).find('ul').toggleClass('active');
			}
		});
	}


})(window.jQuery);

/*view tablet */document.addEventListener("DOMContentLoaded", function () {
    const menuTrigger = document.querySelector(".menu-trigger");
    const navMenu = document.querySelector(".header-area .main-nav .nav");

    menuTrigger.addEventListener("click", function () {
        this.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    // Tutup menu saat mengklik di luar area navigasi
    document.addEventListener("click", function (event) {
        if (!menuTrigger.contains(event.target) && !navMenu.contains(event.target)) {
            menuTrigger.classList.remove("active");
            navMenu.classList.remove("active");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuTrigger = document.querySelector(".menu-trigger");
    const navMenu = document.querySelector(".header-area .main-nav .nav");

    menuTrigger.addEventListener("click", function (event) {
        event.stopPropagation(); // Mencegah klik pada menu trigger menutup menu
        this.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    // Tutup menu saat mengklik di luar area navigasi
    document.addEventListener("click", function (event) {
        if (!menuTrigger.contains(event.target) && !navMenu.contains(event.target)) {
            menuTrigger.classList.remove("active");
            navMenu.classList.remove("active");
        }
    });

    // Mencegah menu tertutup saat mengklik di dalamnya
    navMenu.addEventListener("click", function (event) {
        event.stopPropagation();
    });
});


