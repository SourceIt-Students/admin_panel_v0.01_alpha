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
 $( ".sliderRangeWH" ).slider({
     min: 0,
     max: 100,
     values: [ 55, 66 ],
     range: true,
     slide: function( event, ui ) {
         $( ".preRange" ).attr("style","width: " + ui.values[ 0 ] + "%;" );
     }
 });

 $( ".slider" ).slider({
     value: 67,
     orientation: "horizontal",
     range: "min",
     animate: true
 });

 $( ".sliderRange" ).slider({
	 range: true,
	 values: [ 20, 70 ]
 });



