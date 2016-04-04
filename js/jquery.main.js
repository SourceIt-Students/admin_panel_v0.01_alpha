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

$(function() {
	var $console = $('#console pre');
	
	$('input[type=range]').nativeMultiple({
		stylesheet: "slider",
		onCreate: function() {
			$console.prepend("Слайдеры созданы\n");
		},
		onChange: function(first_value, second_value) {
			$console.prepend("onChange Первое значение: "+first_value+", второе значение: "+second_value+"\n");
		},
		onSlide: function(first_value, second_value) {
			$console.prepend("onSlide Первое значение: "+first_value+", второе значение: "+second_value+"\n");
		},
	});
});