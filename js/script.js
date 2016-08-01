$(function () {
	var originalState = $(".box-row").children().clone();

	$('#shuffle').click(function(e){
		var boxes = $(".box-row").children();

		while (boxes.length) {
			$(".box-row").append(boxes.splice(Math.floor(Math.random() * boxes.length), 1)[0]);
		}

	});

	$('#sort').click(function(e){
		$(".box-row").html(originalState);
	});
});