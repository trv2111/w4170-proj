function getAnswer(id, answerid) {
	$.ajax({
		type: "GET",
		url: "/get_answer",
		dataType: "json",
		data: {"id": id, "answerid": answerid},
		success: function(result) {
			let answer = result["answer"]
			$( ".answer" ).append(answer[1])
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