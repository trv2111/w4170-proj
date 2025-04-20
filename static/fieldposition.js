$( function() {
	$( ".zone-1" ).hover(function() {
		$(".field-info").empty()
		$(".field-info").append("<div class='zone-1-info zone-info'>The Danger Zone</div>")
	})

	$( ".zone-2" ).hover(function() {
		$(".field-info").empty()
		$(".field-info").append("<div class='zone-2-info zone-info'>No Man's Land</div>")
	})

	$( ".zone-3" ).hover(function() {
		$(".field-info").empty()
		$(".field-info").append("<div class='zone-3-info zone-info'>The Green Light</div>")
	})

	$( ".zone-4" ).hover(function() {
		$(".field-info").empty()
		$(".field-info").append("<div class='zone-4-info zone-info'>FG Territory</div>")
	})

	$( ".zone-5" ).hover(function() {
		$(".field-info").empty()
		$(".field-info").append("<div class='zone-5-info zone-info'>The Guts Zone</div>")
	})
})