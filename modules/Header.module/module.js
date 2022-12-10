var topBar = $('.hamburger li:nth-child(1)'),
    middleBar = $('.hamburger li:nth-child(2)'),
    bottomBar = $('.hamburger li:nth-child(3)');

$('.hamburger').on('click', function() {
  $('body').toggleClass('menu_open');
  $('.cm_menu').slideToggle();
  if (middleBar.hasClass('rot-45deg')) {
    topBar.removeClass('rot45deg');
    middleBar.removeClass('rot-45deg');
    bottomBar.removeClass('hidden');
  } else {
    bottomBar.addClass('hidden');
    topBar.addClass('rot45deg');
    middleBar.addClass('rot-45deg');
  }
});

$('.cm_cart_wrap').clone().addClass('mobile').insertAfter('.cm_menu .hs-menu-wrapper');

$('.cm_menu .hs-menu-wrapper ul li.hs-item-has-children > a').after('<div class="child-trigger"></div>');
$('.child-trigger').click(function() {
  $(this).parent().siblings('.hs-item-has-children').removeClass('child-open');
  $(this).parent().siblings('.hs-item-has-children').find('.hs-menu-children-wrapper').slideUp(250);
  $(this).siblings('.hs-menu-children-wrapper').slideToggle(250);
  $(this).siblings('.hs-menu-children-wrapper').children('.hs-item-has-children').find('.hs-menu-children-wrapper').slideUp(250);
  $(this).siblings('.hs-menu-children-wrapper').children('.hs-item-has-children').removeClass('child-open');
  $(this).parent().toggleClass('child-open');
  return false;
});