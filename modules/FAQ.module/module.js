$(document).ready(function(){
  $('.accordion-list > li > .faq_item >.cm_content_wrap').hide();
  $('.accordion-list > li').first().addClass("active");
  $('.accordion-list > li:first-child > .faq_item >.cm_content_wrap').show();
  $('.accordion-list > li > .faq_item > .cm_title').click(function() {
    if ($(this).parent().parent().hasClass("active")) {
      $(this).parent().parent().removeClass("active").find(".cm_content_wrap").slideUp();
    } else {
      $(".accordion-list > li.active .cm_content_wrap").slideUp();
      $(".accordion-list > li.active").removeClass("active");
      $(this).parent().parent().addClass("active").find(".cm_content_wrap").slideDown();
    }
    return false;
  });
});