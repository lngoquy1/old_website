
// $('.navbutton').on('click', function() {
// 	$('.content').toggleClass('isOpen');
// });

$('.cta a').click(function() {
	$('html,body').animate({
		scrollTop: $('#tours').offset().top
	}, 500);
	return false;
});

$('#tours li').on('click', function() {
	$('#location').val($('img', this).attr('alt'));
});
