//----Include-Function----
function include(url) {
	document.write('<script src="js/' + url + '"></script>');
	return false;
}



//year sccript

var currentYear = (new Date).getFullYear();
$(document).ready(function () {
	$("#copyright-year").text((new Date).getFullYear());
});

/* easing
========================================================*/
include('jquery.easing.1.3.js');

/* DEVICE.JS
========================================================*/
include('device.min.js');

/* Sf-menu
========================================================*/
include('superfish.js');
jQuery(function () {
	jQuery('.sf-menu').mobileMenu();
})

/* Mobilemenu
========================================================*/
include('jquery.mobilemenu.js');

/* Stick up menu
========================================================*/
include('tmstickup.js');
$(window).ready(function () {
	if ($('html').hasClass('desktop')) {
		$('#stuck_container').TMStickUp({})
	}
});

/* DEVICE.JS AND SMOOTH SCROLLIG
========================================================*/
include('jquery.mousewheel.min.js');
include('jquery.simplr.smoothscroll.min.js');
var macOrpc = navigator.userAgent.indexOf('Mac OS X');
$(function () {
	if (($('html').hasClass('desktop')) && (macOrpc == -1)) {
		$.srSmoothscroll({
			step: 150,
			speed: 800,
			ease: 'swing',
			target: $('body'),
			container: $(window)
		});

	}
});
/* jquery.rd-parallax.js
========================================================*/
include('jquery.rd-parallax.js');
/*-----*/
/* jquery.ui.totop.js
========================================================*/
include('jquery.ui.totop.js');
$(function () {
	$().UItoTop({
		easingType: 'easeOutQuart'
	});
});


$(function () {
	// IPad/IPhone
	var viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]'),
		ua = navigator.userAgent,

		gestureStart = function () {
			viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6, initial-scale=1.0";
		},

		scaleFix = function () {
			if (viewportmeta && /iPhone|iPad/.test(ua) && !/Opera Mini/.test(ua)) {
				viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
				document.addEventListener("gesturestart", gestureStart, false);
			}
		};
	scaleFix();

	// Menu Android
	if (window.orientation != undefined) {
		var regM = /ipod|ipad|iphone/gi,
			result = ua.match(regM)
		if (!result) {
			$('.sf-menu li').each(function () {

				if ($(">ul", this)[0]) {
					$(">a", this).toggle(
						function () {
							return false;
						},
						function () {
							window.location.href = $(this).attr("href");
						}
					);
				}
			})
		}
	}
});
/* ------ fi fixed position on Android -----*/
var ua = navigator.userAgent.toLocaleLowerCase(),
	regV = /ipod|ipad|iphone/gi,
	result = ua.match(regV),
	userScale = "";
if (!result) {
	userScale = ",user-scalable=0"
}
document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0' + userScale + '">')
	/*--------------*/