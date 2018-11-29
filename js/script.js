$(document).ready(function(){
	$(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();

        } else {
            $('#toTop').fadeOut();
        }
        });
    $('#toTop').click(function() {
        $('body,html').animate({scrollTop:0},800);
    });

	$(".block-chs").slick({
		slideToShow: 1,
		autoplay: true
	});
	setInterval(anim, 5000);
	// function anim() {
	// 	$('.animation').animate({
	// 		right: '25%'
	// 	}, 5000);
	// 	$('.anim-title').css({
	// 		animation: 'blink 10s infinite'
	// 	});
	// 	$('.anim-sub-title').css({
	// 		animation: 'blink2 10s infinite'
	// 	});
	// 	$('.animation').delay(3000).animate({
	// 		right: '-260px'
	// 	},5000);
	// }
});
