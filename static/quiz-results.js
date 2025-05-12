function getScore() {
	$.ajax({
		type: "GET",
		url: "/get_score",
		dataType: "json",
		success: function(result) {
			$( ".score" ).append(result["score"] + "/" + result["total"])

			if (result["score"] == result["total"]) {
				$( ".results-text" ).append(`<b>Congratulations! You scored 100%!</b><br><br>
					You have successfully learned how to think like a coach.<br>
					You understand when to for it, kick it, or call a timeout – and that makes you a strategic powerhouse.
				`)
				$( ".results-btn-container" ).append("<a href='/quiz-question/1' class='default-button'>Quiz again!</a>")
			} else if (result["score"] == result["total"] - 1) {
				$( ".results-text" ).append(`<b>You're getting there!</b><br><br>
					You have started to learn how to think like a coach, and are going in the right direction.<br>
					Practice makes perfect! Take some time to revisit the lesson and then try again.`)
				$( ".results-btn-container" ).append("<a href='/learn' class='default-button'>Review</a>")
			} else {
				$( ".results-text" ).append(`<b>Not quite there yet.</b><br><br>
					You scored ${result["score"]}/${result["total"]} on this quiz, but don't worry!<br>
					Learning to think like a coach takes practice. Let's revisit the lesson and sharpen your game-time decisions.`)
				$( ".results-btn-container" ).append("<a href='/learn' class='default-button'>Review</a>")
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
	getScore()
})
