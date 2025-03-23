(function($) {

	'use strict';

	/**
	 	<=={Master JS}==>
	 	01 Header Sticky JS
		02 Mobile Menu JS
		03 Go Top JS
		04 Preloader JS
		05 scrollCue JS
		06 Students Expressed Slide JS
		07 Events Slide JS
		08 Partners Slide JS
		09 Related Blog Slide JS
		10 Related Course Slide JS
		11 Courses Category Slide JS
		12 Attendee Slide JS
		13 Related Course Slide Two JS
		14 Counter JS
		15 Popup JS
		16 Password JS
		17 Curt BTN JS
		18 Background Image JS
		19 Count Down JS
		20 Count Down JS
		21 Mouseover JS
		22 MixItUp `JS
	**/
	
	/**<<=== 01 Header Sticky JS ==>>**/
	$(window).on('scroll', function() {
		if ($(this).scrollTop() >150){  
			$('.navbar-section').addClass("is-sticky");
		}
		else{
			$('.navbar-section').removeClass("is-sticky");
		};
	});

	/**<<=== 02 Mobile Menu JS ==>>**/
	$('.for-mobile-menu').meanmenu({
		meanScreenWidth: "991",
		
	});

	/**<<=== 03 Go Top JS ==>>**/
	$('.back-to-top').on('click', function() {
		$("html, body").animate({ scrollTop: "0" }, 50);
	});
	$(window).on('scroll', function() {
		var scrolled = $(window).scrollTop();
		if (scrolled > 300) $('.back-to-top').addClass('active');
		if (scrolled < 300) $('.back-to-top').removeClass('active');
	});

	/**<<=== 04 Preloader JS ==>>**/
	$(window).on('load', function() {
		$('.preloader').addClass('preloader-deactivate');
	}) 

	/**<<=== 05 scrollCue JS ==>>**/
	scrollCue.init();

	/**<<=== 06 Students Expressed Slide JS ==>>**/
	$('.students-expressed-slide').owlCarousel({
		items: 1,
		loop: true,
		margin: 25,
		nav: true,
		dots: false,
		autoplay: false,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		center: true,
		navText: [
			"<i class='fa-regular fa-chevron-left'></i>",
			"<i class='fa-regular fa-chevron-right'></i>",
		],
		responsive: {
			0: {
				items: 1,
			},
			576: {
				items: 1,
			},
			768: {
				items: 2,
			},
			992: {
				items: 2,
			},
			1200: {
				items: 2,
			},
			1500: {
				items: 2.3,
				stagePadding: 50,
			},
			1700: {
				items: 2.8,
				stagePadding: 50,
			},
		},
	});

	/**<<=== 07 Events Slide JS ==>>**/
	$('.events-slide').owlCarousel({
		items: 1,
		loop: true,
		margin: 30,
		nav: true,
		dots: false,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		navText: [
			"<i class='fa-regular fa-chevron-left'></i>",
			"<i class='fa-regular fa-chevron-right'></i>",
		],
		responsive: {
			0: {
				items: 1,
			},
			576: {
				items: 1,
			},
			768: {
				items: 1,
			},
			992: {
				items: 2,
			},
			1200: {
				items: 2,
			},
			1500: {
				items: 2,
			},
		},
	});

	/**<<=== 08 Partners Slide JS ==>>**/
	$('.partners-slide').owlCarousel({
		items: 1,
		loop: true,
		margin: 30,
		nav: false,
		dots: false,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
			},
			400: {
				items: 2,
			},
			576: {
				items: 3,
			},
			768: {
				items: 4,
			},
			992: {
				items: 4,
			},
			1200: {
				items: 5,
			},
			1500: {
				items: 5,
			},
		},
	});

	/**<<=== 09 Related Blog Slide JS ==>>**/
	$('.related-blog-slide').owlCarousel({
		items: 1,
		loop: true,
		margin: 30,
		nav: true,
		dots: false,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		navText: [
			"<i class='fa-regular fa-chevron-left'></i>",
			"<i class='fa-regular fa-chevron-right'></i>",
		],
		responsive: {
			0: {
				items: 1,
			},
			400: {
				items: 1,
			},
			576: {
				items: 1,
			},
			768: {
				items: 2,
			},
			992: {
				items: 2,
			},
			1200: {
				items:2,
			},
			1500: {
				items: 2,
			},
		},
	});

	/**<<=== 10 Related Course Slide JS ==>>**/
	$('.related-course-slide').owlCarousel({
		items: 1,
		loop: true,
		margin: 30,
		nav: true,
		dots: false,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		navText: [
			"<i class='fa-regular fa-chevron-left'></i>",
			"<i class='fa-regular fa-chevron-right'></i>",
		],
		responsive: {
			0: {
				items: 1,
			},
			400: {
				items: 1,
			},
			576: {
				items: 1,
			},
			768: {
				items: 1.5,
			},
			992: {
				items: 2,
			},
			1200: {
				items:2,
			},
			1500: {
				items: 2,
			},
		},
	});

	/**<<=== 11 Courses Category Slide JS ==>>**/
	$('.courses-category-slide').owlCarousel({
		items: 1,
		loop: true,
		margin: 30,
		nav: true,
		dots: false,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		navText: [
			"<i class='fa-regular fa-chevron-left'></i>",
			"<i class='fa-regular fa-chevron-right'></i>",
		],
		responsive: {
			0: {
				items: 1,
			},
			576: {
				items: 2,
			},
			768: {
				items: 2,
			},
			992: {
				items: 3,
			},
			1200: {
				items: 4,
			},
			1500: {
				items: 4,
			},
		},
	});

	/**<<=== 12 Attendee Slide JS ==>>**/
	$('.attendee-slide').owlCarousel({
		items: 1,
		loop: true,
		margin: 30,
		nav: true,
		dots: false,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		navText: [
			"<i class='fa-regular fa-chevron-left'></i>",
			"<i class='fa-regular fa-chevron-right'></i>",
		],
		responsive: {
			0: {
				items: 1,
			},
			576: {
				items: 2,
			},
			768: {
				items: 3,
			},
			992: {
				items: 5,
			},
			1200: {
				items: 4,
			},
			1500: {
				items: 5,
			},
		},
	});

	/**<<=== 13 Related Course Slide Two JS ==>>**/
	$('.related-course-slide-two').owlCarousel({
		items: 1,
		loop: true,
		margin: 30,
		nav: true,
		dots: false,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		navText: [
			"<i class='fa-regular fa-chevron-left'></i>",
			"<i class='fa-regular fa-chevron-right'></i>",
		],
		responsive: {
			0: {
				items: 1,
			},
			400: {
				items: 1,
			},
			576: {
				items: 1,
			},
			768: {
				items: 1.5,
			},
			992: {
				items: 2,
			},
			1200: {
				items:2,
			},
			1500: {
				items: 3,
			},
		},
	});
	
	/**<<=== 14 Counter JS ==>>**/
    $('.counter').counterUp({
        time: 1000
    });
	
	/**<<=== 15 Popup JS ==>>**/
	$('.popup-youtube, .popup-vimeo').magnificPopup({
		disableOn: 300,
		type: 'iframe',
		mainClass: 'mfp-fade',
		fixedContentPos: false,
		removalDelay: 160,
		preloader: false,
	});

	/**<<=== 16 Password JS ==>>**/
	$(".toggle-password").click(function() {

		$(this).toggleClass("icofont-eye-blocked");
		var input = $($(this).attr("toggle"));
		if (input.attr("type") == "password") {
			input.attr("type", "text");
		} else {
		  	input.attr("type", "password");
		}
	});

	/**<<=== 17 Curt BTN JS ==>>**/
	$(".minus").click(function () {
		var $input = $(this).parent().find(".box");
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$(".plus").click(function () {
		var $input = $(this).parent().find(".box");
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});

	/**<<=== 18 Background Image JS ==>>**/
	$("[data-background]").each(function () {
		$(this).css(
			"background-image",
			"url(" + $(this).attr("data-background") + ")"
		);
	});

	/**<<=== 19 Count Down JS ==>>**/
	var time = $('.count-down, .count-down-event');
    if (time.length) {
      var endDate = new Date(time.data("end-date"));
      time.countdown({
        date: endDate,
			render: function (data) {
			$(this.el).html('<div class="cd-row"><div><h1>' + this.leadingZeros(data.days, 3)
				+ '</h1><p>days</p></div><div><h1>'
				+ this.leadingZeros(data.hours, 2)
				+ '</h1><p>hrs</p></div></div><div class="cd-row"><div><h1>'
				+ this.leadingZeros(data.min, 2)
				+ '</h1><p>min</p></div><div><h1>'
				+ this.leadingZeros(data.sec, 2)
				+ '</h1><p>sec</p></div></div>');
			}
      	});
    }
	
	/**<<=== 20 Count Down JS ==>>**/
	var time = $('.count-down, .count-down-event');
    if (time.length) {
      var endDate = new Date(time.data("end-date"));
      time.countdown({
        date: endDate,
			render: function (data) {
			$(this.el).html('<div class="cd-row"><div><h1>' + this.leadingZeros(data.days, 3)
				+ '</h1><p>days</p></div><div><h1>'
				+ this.leadingZeros(data.hours, 2)
				+ '</h1><p>hrs</p></div></div><div class="cd-row"><div><h1>'
				+ this.leadingZeros(data.min, 2)
				+ '</h1><p>min</p></div><div><h1>'
				+ this.leadingZeros(data.sec, 2)
				+ '</h1><p>sec</p></div></div>');
			}
      	});
    }

	/**<<=== 21 Mouseover JS ==>>**/
	try {
        var elements = document.querySelectorAll("[id^='my-element']");
            elements.forEach(function(element) {
            element.addEventListener("mouseover", function() {
                elements.forEach(function(el) {
                el.classList.remove("active");
                });
                element.classList.add("active");
            });
        });
    
    } catch (err) {}


	/**<<=== 22 MixItUp JS ==>>**/
	$('.shorting').mixItUp();

})(jQuery);
