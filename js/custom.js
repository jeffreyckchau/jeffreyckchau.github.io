var content_height_center = $('.center-wrapper').height();

$(document).ready(function() {
	$('#left-banner').css("margin-top", -content_height_center);
	$('#right-banner').css("margin-top", -content_height_center);
});