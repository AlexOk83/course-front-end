jQuery(document).ready(function () {

  $('.header__toggle-button').click(function () {
      $(this).toggleClass('active');
      $('.device-toggle-content').toggleClass('active');
  });

});
