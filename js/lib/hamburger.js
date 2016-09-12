$("#hamburger").click(function (e) {
	$("#hamburger").toggleClass("cross");
});


$("#nav li a").on("click", function (e) {
	$("#hamburger").trigger('click')
});


// mobile menu

var closeTo = false;
//    $("#nav").css('display', 'none');
$("#togle-menu").on("click", function (e) {
	e.preventDefault();

	if (isMobile.matches) {
		$("#nav").toggleClass("menu-open");
		if ($("#nav").hasClass("menu-open")) {
			$("#nav")
				.removeClass("menu-closed")
				.css('display', 'block');
			clearTimeout(closeTo);
		} else {
			$("#nav").addClass("menu-closed");
			clearTimeout(closeTo);
			closeTo = setTimeout(function () {
				$("#nav").css('display', 'none');
			}, 1400)
		}
	}
});


$(window).resize(function (e) {
	if (!isMobile.matches) {
		$("#nav").css('display', 'block');
	} else {
		$("#nav").css('display', 'none');
	}
})

// scrolling animations
window.addEventListener("scroll", (function () {
	if (!isMobile.matches) {

		var top = document.body.scrollTop || document.documentElement.scrollTop
		if (top > 600) {
			$("#navbar")
				.addClass('fixed')
				.removeClass('animated fadeOutUp')
				.addClass('animated fadeInDown');

		} else if (top > 150) {
			$("#navbar")

				.removeClass('animated fadeInDown')
				.addClass('animated fadeOutUp');

		} else {
			$("#navbar")
				.removeClass('fixed')
				.removeClass('animated fadeInDown')
				.removeClass('animated fadeOutUp');
		}
	}
}));

// scroll animation

$(function () {
	$('a[href*=#]:not([href=#])').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
});
