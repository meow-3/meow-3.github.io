$(document).scroll(function() {
  var y = $(this).scrollTop();
  //$('.test').html(y);
  if (y > 40) {
	$('.menu').css({position: 'fixed'});
  }
  else {
	$('.menu').css({position: ''});
  }
  
});