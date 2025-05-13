$( function() {
	$(".field-info").append("<div class='hover-info zone-info'>"
								+ "<div class='zone-title'>Hover Over The Field</div>"
								+ "Take a look at the different zones!"
								+ "</div>")

	$( ".zone-1" ).hover(function() {
		$(".field-info").empty()
		$(".field-info").append("<div class='zone-1-info zone-info'>"
								+ "<div class='zone-title'>The Danger Zone</div>"
								+ "You’re deep in your own territory. Failure here is brutal. Almost always PUNT!"
								+ "</div>")
	})

	$( ".zone-2" ).hover(function() {
		$(".field-info").empty()
		$(".field-info").append("<div class='zone-2-info zone-info'>"
								+ "<div class='zone-title'>No Man's Land</div>"
								+ "Too far to kick, too close to punt comfortably. Analytics often say go for it on short yardage."
								+ "</div>")
	})

	$( ".zone-3" ).hover(function() {
		$(".field-info").empty()
		$(".field-info").append("<div class='zone-3-info zone-info'>"
								+ "<div class='zone-title'>The Green Light</div>"
								+ "Sweet spot for going for it. Many coaches take the risk here, especially if it’s 4th & short."
								+ "</div>")
	})

	$( ".zone-4" ).hover(function() {
		$(".field-info").empty()
		$(".field-info").append("<div class='zone-4-info zone-info'>"
								+ "<div class='zone-title'>FG Territory</div>"
								+ "Within range for most kickers. Default play is to take the 3 points, but short yardage might be worth going for it."
								+ "</div>")
	})

	$( ".zone-5" ).hover(function() {
		$(".field-info").empty()
		$(".field-info").append("<div class='zone-5-info zone-info'>"
								+ "<div class='zone-title'>The Guts Zone</div>"
								+ "You’re close to the goal – don’t settle. If you need a TD, go for it."
								+ "</div>")
	})
})