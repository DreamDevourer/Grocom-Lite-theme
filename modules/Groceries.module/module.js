
var minVal = 0,
  maxVal = 50; // Set Max and Min values
// Increase product quantity on cart page

$(".cm_product_item").each(function () {
  $(this)
    .find(".cm_add")
    .on("click", function () {
      var $parentElm = $(this).parents(".cm_add_subt");
      $(this).addClass("clicked");
      setTimeout(function () {
        $(".clicked").removeClass("clicked");
      }, 100);
      var value = $parentElm.find(".qtyValue").val();
      if (value < maxVal) {
        value++;
      }
      $parentElm.find(".qtyValue").val(value);

      if (value === 0) {
        $parentElm.find(".cm_sub").addClass("cart-sub-disable");
      } else {
        $parentElm.find(".cm_sub").removeClass("cart-sub-disable");
      }
    });
});
// Decrease product quantity on cart page
$('.cm_product_item').each(function () {
$(this)
  .find(".cm_sub")
  .on("click", function () {
    var $parentElm = $(this).parents(".cm_add_subt");
    $(this).addClass("clicked");
    setTimeout(function () {
      $(".clicked").removeClass("clicked");
    }, 100);
    var value = $parentElm.find(".qtyValue").val();
    if (value > 0) {
      value--;
    }
    $parentElm.find(".qtyValue").val(value);

    if (value === 0) {
      $parentElm.find(".cm_sub").addClass("cart-sub-disable");
    } else {
      $parentElm.find(".cm_sub").removeClass("cart-sub-disable");
    }
  });
});
