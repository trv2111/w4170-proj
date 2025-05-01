function getQuestion(id) {
	$.ajax({
		type: "GET",
		url: "/get_question",
		dataType: "json",
		data: {"id": id},
		success: function(result) {
			let question = result["question"]
			let image = result["image"]

			appended = `
				<div class="row">
					<div class='col-6'><img class='scoreboard-quiz' src='${image}'><br></div>
					<div class='col-6'>
						<div class='row question-title green'>Question ${id}</div>
						<div class='row question-text darkGrey'>${question['question']}</div><br>
						<div class='row'>
			`
			Object.entries(question["answers"]).forEach(([answerid, answer]) => {
				appended += "<a href='/quiz-answer/" + id + "/" + answerid + "' class='default-button quiz-btn'>" + answer[0] + "</a>"
			});
			appended += "</div></div></div>"
			$( ".question" ).append(appended)
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