$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        $('[data-spy="scroll"]').each(function () {
  			var $spy = $(this).scrollspy('refresh')
		});
        return false;
      }
    }
  });
  $('body').scrollspy({ target: '.navbar-inverse', offset: 70 });
});

$(function(){
  $('input[type=radio]').iCheck({
    checkboxClass: 'icheckbox_square-green',
    radioClass: 'iradio_square-green',
    increaseArea: '20%' // optional
  });
});