 $(document).ready(function() {
	tabs();
});
function tabs() {
	$(".navAside").on("click", ".select:not(.active)", function() {
		$(this).addClass("active").siblings().removeClass("active");   
	});
	$("ul.navAside").on("click", ".select.active>a", function() {
		$(this).parent().removeClass("active");
	});
}

 $( ".slider" ).slider({
	 value: 60,
	 orientation: "horizontal",
	 range: "min",
	 animate: true
 });

 $( ".sliderRange" ).slider({
	 range: true,
	 values: [ 17, 67 ]
 });