function getQuestion(id) {
	$.ajax({
		type: "GET",
		url: "/get_question",
		dataType: "json",
		data: {"id": id},
		success: function(result) {
			let question = result["question"]
			let image = result["image"]

			$( ".question" ).append("<img class='scoreboard-quiz' src='" + image + "'><br>")
			$( ".question" ).append(question["question"])
			Object.entries(question["answers"]).forEach(([answerid, answer]) => {
				$( ".question-btn-container" ).append(
					"<a href='/quiz-answer/" + id + "/" + answerid + "' class='default-button'>" + answer[0] + "</a>"
				)
			});
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
	getQuestion(questionid)
})