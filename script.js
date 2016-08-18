$(document).ready(function() {
  $('.button').on('click', function() {
    $('.content').toggleClass('isOpen');
    $('.title').toggle();
  });

  $('.sidebar ul li a').on('click', function(){
  	var tab = $(this).text();
    $('.content h1').text(tab);
    $('.sidebar ul li a').removeClass('active');
    $(this).addClass('active');
  });
});
