$('.toWork').click(function () {

    $('body,html').animate({ scrollTop: ($('#doesWhatPage').offset().top)-20}, 600, 'linear');
});

$('.toBio').click(function (e) {
  e.preventDefault();
  $('body,html').animate({ scrollTop: ($('#isWhoPage').offset().top)-20}, 500, 'linear');
});



// Set background image Height based on window height
// dynamically adjust image height based on window size

$('#landing-page').height($(window).height() * .98);

window.addEventListener('resize', function(event){
  if ($(window).height() > 500){
    $('#landing-page').height($(window).height() * .98);
  }
});
