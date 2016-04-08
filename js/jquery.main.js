 $(document).ready(function() {
     tabs();
     aBtnGroup();
     getAttr();
     highlightTab();
});
function tabs() {
	$(".navAside").on("click", ".select:not(.active)", function() {
		$(this).addClass("active").siblings().removeClass("active");   
	});
	$("ul.navAside").on("click", ".select.active>a", function() {
		$(this).parent().removeClass("active");
	});
}
 function aBtnGroup() {
     $(".a-btn-group").on("click", ".a-btn:not(.active)", function() {
         $(this).addClass("active").siblings().removeClass("active");
     });
 }
 $( ".sliderRangeWH" ).slider({
     min: 0,
     max: 100,
     values: [ 57, 66 ],
     range: true,
     slide: function( event, ui ) {
         $( ".preRange" ).attr("style","width: " + ui.values[ 0 ] + "%;" );
     }
 });
 function getAttr(){
     var val =  $(".sliderRangeWH span:nth-child(3)").attr("style").replace("left","width");
     $( ".preRange" ).attr("style",val);
 }

 $( ".slider" ).slider({
     value: 57,
     orientation: "horizontal",
     range: "min",
     animate: true
 });

 $( ".sliderRange" ).slider({
	 range: true,
	 values: [ 25, 81 ]
 }); 