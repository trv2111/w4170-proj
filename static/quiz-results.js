function getScore() {
	$.ajax({
		type: "GET",
		url: "/get_score",
		dataType: "json",
		success: function(result) {
			$( ".score" ).append(result["score"] + "/" + result["total"])

			if (result["score"] == result["total"])
				$( ".results-btn-container" ).append("<a href='/quiz-question/1' class='default-button'>quiz again!</a>")
			else
				$( ".results-btn-container" ).append("<a href='/learn' class='default-button'>review</a>")
		},
		error: function(request, status, error){
                  console.log("Error");
                  console.log(request);
                  console.log(status);
                  console.log(error);
         }
	});
}

$( function() {
	getScore()
})