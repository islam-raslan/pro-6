
$(document).ready(function(){
for (var i = 0; i < $(".smallimg img").length; i++) {
    var smal =$(".imgs").prop("src");

 $(".smallimg img").click(function(){

$(".bgimg img").attr("src",$(this).attr("src"));

});
}})