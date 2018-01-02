
// $('.navbutton').on('click', function() {
// 	$('.content').toggleClass('isOpen');
// });

var closeButton = document.getElementByClassName("closebtn")[0];
closeButton.onclick = function closeNav() {
    document.getElementByClassName("sidebar").style.width = "0";
    document.getElementByClassName("content").style.marginLeft= "0";
}

var navButton = document.getElementByClassName("navbutton")[0];
navButton.onclick = function openNav() {
    document.getElementByClassName("sidebar").style.width = "250px";
    document.getElementByClassName("content").style.marginLeft = "250px";
}



// document.getElementById("navbutton").onclick = openNav();

// $('.cta a').click(function() {
// 	$('html,body').animate({
// 		scrollTop: $('#tours').offset().top
// 	}, 500);
// 	return false;
// });

// $('#tours li').on('click', function() {
// 	$('#location').val($('img', this).attr('alt'));
// });
