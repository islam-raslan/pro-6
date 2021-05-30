
$(document).ready(function(){
$(".regular").slick({
   
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1
    
  });


  $('.counter').each(function() {
    var size = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length : 0;
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 5000,
        step: function(func) {
            $(this).text(parseFloat(func).toFixed(size));
        }
    }); });

    $(".load").css("width",$(document).width());
    $(".load").css("height",$(document).height());
})