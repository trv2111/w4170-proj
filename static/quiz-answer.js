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
				$( ".answer-btn-container" ).append("<a href='/quizresults' class='default-button'>finish quiz</a>")
			}
			else if (id < numquestions) {
				console.log(parseInt(id) + 1)
				$( ".answer-btn-container" ).append("<a href='/quiz-question/" + String(parseInt(id)+1) + "' class='default-button'>next question</a>")
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
})