function getQuestion(id) {
	$.ajax({
		type: "GET",
		url: "/get_question",
		dataType: "json",
		data: {"id": id},
		success: function(result) {
			let question = result["question"]

			// add the stuff to the html
		},
		error: function(request, status, error){
                  console.log("Error");
                  console.log(request);
                  console.log(status);
                  console.log(error);
         }
	});
}