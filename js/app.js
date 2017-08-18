$(document).ready(function(){
    $('.button-collapse').sideNav({
      menuWidth: 250, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    }
  );
  $('.popup-overlay, .close-area, .close-btn').click(function(){
    $('.popup, .popup-overlay').addClass('hide');
  });
  $('.enroll').click(function(){
    $('#enroll-popup, #enroll-popup .popup-overlay').removeClass('hide');
  });
  $('.login-now').click(function(){
    $('#login-popup, #login-popup .popup-overlay').removeClass('hide');
  });
  $('.swap2enroll').click(function(){
    $('#login-popup, #login-popup .popup-overlay').addClass('hide');
    $('#enroll-popup, #enroll-popup .popup-overlay').removeClass('hide');
  });
  $('.swap2login').click(function(){
    $('#login-popup, #login-popup .popup-overlay').removeClass('hide');
    $('#enroll-popup, #enroll-popup .popup-overlay').addClass('hide');
  });
});
















































$(function () {
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});