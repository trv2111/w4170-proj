from flask import Flask, render_template, request, jsonify

app = Flask(__name__)


questions = {
    "1": {
        "question": "can you answer question 1?",
        "image": "",
        "answers": {
            "1": ["answer1", "feedback 1", True],
            "2": ["answer2", "feedback 2", False],
            "3": ["answer3", "feedback 3", False]
        }
    },
    "2": {
        "question": "can you answer question 2?",
        "image": "",
        "answers": {
            "1": ["answer1", "feedback 1", True],
            "2": ["answer2", "feedback 2", False],
            "3": ["answer3", "feedback 3", False]
        }
    },
    "3": {
        "question": "can you answer question 3?",
        "image": "",
        "answers": {
            "1": ["answer1", "feedback 1", True],
            "2": ["answer2", "feedback 2", False],
            "3": ["answer3", "feedback 3", False]
        }
    }
}

scorekeeper = [False] * len(questions)


@app.context_processor
def inject_request():
    return dict(request=request)

# Landing Page
@app.route("/")
def index():
    return render_template("index.html")

# Terre
@app.route("/home")
def home():
    return render_template("home.html")

# Dany
@app.route("/football101")
def football101():
    return render_template("")

# Terre
@app.route("/learn")
def learn():
    return render_template("learn.html")

# Kat
@app.route("/learn/field-position")
def learn_field_position():
    return render_template("")

# Dany
@app.route("/learn/yards-to-go")
def learn_yards_to_go():
    return render_template("")

# Connor
@app.route("/learn/time-score")
def learn_time_score():
    return render_template("")

# Terre
@app.route("/learn/timeouts")
def timeouts():
    return render_template("timeouts.html")

# Connor
@app.route("/summary")
def summary():
    return render_template("")

# Kat
@app.route("/quiz")
def quiz():
    return render_template("quiz.html")

@app.route("/quiz-question/<questionid>")
def quiz_question(questionid):
    return render_template("quiz-question.html", questionid=questionid)

@app.route("/quiz-answer/<questionid>/<answerid>")
def quiz_answer(questionid, answerid):
    return render_template("quiz-answer.html", questionid=questionid,
        answerid=answerid)

@app.route("/quiz-results")
def quiz_results():
    return render_template("quiz-results.html")

@app.route('/get_question', methods=['GET'])
def get_question():
    global questions
    questionid = request.args.get('id')

    result = questions[questionid]

    return jsonify({"question": result})

@app.route('/get_answer', methods=['GET'])
def get_answer():
    global questions
    questionid = request.args.get('id')
    answerid = request.args.get('answerid')

    question = questions[questionid]
    result = question["answers"][answerid]

    return jsonify({
        "answer": result, 
        "numquestions": len(questions)
    })

@app.route('/update_score', methods=['POST'])
def update_score():
    global questions
    global scorekeeper
    info = request.get_json()

    questionid = info['id']
    answerid = info['answerid']

    result = questions[questionid]["answers"][answerid][2]

    scorekeeper[int(questionid) - 1] = result

    return jsonify({"result": result})

@app.route('/get_score', methods=['GET'])
def get_score():
    global scorekeeper

    score = 0
    for point in scorekeeper:
        if point==True:
            score += 1

    return jsonify({"score": score, "total": len(scorekeeper)})

if __name__ == "__main__":
    app.run(debug=True)
