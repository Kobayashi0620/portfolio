$('#headerMenu a[href*="#"]').click(function () {
	var elmHash = $(this).attr('href');
	var pos = $(elmHash).offset().top;
	$('body,html').animate({scrollTop: pos}, 500);
	return false;
});

$('#footerMenu a[href*="#"]').click(function () {
	var elmHash = $(this).attr('href');
	var pos = $(elmHash).offset().top;
	$('body,html').animate({scrollTop: pos}, 500);
	return false;
});