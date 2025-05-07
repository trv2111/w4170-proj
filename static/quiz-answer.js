function getAnswer(id, answerid) {
	$.ajax({
		type: "GET",
		url: "/get_answer",
		dataType: "json",
		data: {"id": id, "answerid": answerid},
		success: function(result) {
			let answer = result["answer"]
			let numquestions = result["numquestions"]
			$( ".answer" ).append(answer[1])
			if (id == numquestions) {
				$( ".answer-btn-container" ).append("<a href='/quiz-results' class='default-button'>See Results</a>")
			}
			else if (id < numquestions) {
				console.log(parseInt(id) + 1)
				$( ".answer-btn-container" ).append("<a href='/quiz-question/" + String(parseInt(id)+1) + "' class='default-button'>Next</a>")
			}
		},
		error: function(request, status, error){
                  console.log("Error");
                  console.log(request);
                  console.log(status);
                  console.log(error);
         }
	});
}

function updateScore(id, answerid) {
	$.ajax({
		type: "POST",
		url: "/update_score",
		dataType: "json",
		contentType: "application/json; charset=utf-8",
		data: JSON.stringify({"id": id, "answerid": answerid}),
		success: function(result) {
			if (result["result"] == true) {
				$( ".answer-image" ).append("<img class = 'celebimage' src='" + celebration + "'>")
			}
			else {
				$( ".answer-image" ).append("<img class = 'missimage' src='" + failure + "'>")
			}
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
	getAnswer(questionid, answerid)
	updateScore(questionid, answerid)
})