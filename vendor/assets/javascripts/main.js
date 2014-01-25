$(function() {
    $('.nav a[href*=#]:not([href=#]), .navbar-brand').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 80
                }, 1000);/*
        $('[data-spy="scroll"]').each(function () {
  			var $spy = $(this).scrollspy('refresh')
		});*/
                return false;
            }
        }
    });/*
    $("#galleryBtn").click(function(e) {
        e.preventDefault();
        $("#everything").fadeOut(2000);
        setTimeout(function() {
            location = "/gallery";
        }, 2000);
    });*/
});

$(function(){
    $('input[type=radio]').iCheck({
        checkboxClass: 'icheckbox_square-green',
        radioClass: 'iradio_square-green',
        increaseArea: '20%' // optional
    }); 
    $('input[type=checkbox]').iCheck({
        checkboxClass: 'icheckbox_square-green',
        radioClass: 'iradio_square-green',
        increaseArea: '20%' // optional
    }); 
});