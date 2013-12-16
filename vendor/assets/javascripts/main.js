$(function() {
	$("#homebanner h2").css("margin-bottom", $(window).height()-234-$("#homebanner h1").height());
	$("#supPopover").animate({
		left: $('#homebanner .btn.supbutton').offset().left-61,
		top: $('#homebanner .btn.supbutton').offset().top-92
	}, 0);
	$( window ).resize(function() {
		$("#homebanner h2").css("margin-bottom", $(window).height()-234-$("#homebanner h1").height());
		$("#supPopover").animate({
			left: $('#homebanner .btn.supbutton').offset().left-61,
			top: $('#homebanner .btn.supbutton').offset().top-92
		}, 0);
	});
	$('.btn.supbutton').click(function() {
		$('#signupForm').modal()
	});
});