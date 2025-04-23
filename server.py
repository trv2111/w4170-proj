from flask import Flask, render_template, request, jsonify, url_for

app = Flask(__name__)


questions = {
    "1": {
        "question": "Evaluate the following 4th down scenario using field position, distance, score, and time:\nYou are on the opponent’s 45-yard line. It’s 4th & 2. You are down by 4 with 6 minutes left in the 4th quarter. What do you do?",
        "answers": {
            "1": ["Go For It", "Great call! There’s a high conversion chance, we weren’t in field goal range, and punting gives away momentum when you’re losing late.\nCongratulations! You made the aggressive call – and it worked! You kept the drive alive and gave your team a shot to win!", True],
            "2": ["Kick", "This would be about a 62-yard attempt and is outside of your kicker’s range. Even if it went in, you’d still be behind by 1. This wasn’t the best move here.", False],
            "3": ["Punt", "feedback 3", False]
        }
    },
    "2": {
        "question": "Evaluate the following 4th down scenario using field position, distance, score, and time:\nYou are on your own 28-yard line. It’s 4th & 7. You are up by 3 with 4:50 left in the 4th quarter. The opponent has all 3 timeouts. What do you do?\n\nDilemma: You’re in the lead, but not by much. It’s 4th & long, and you’re deep in your own territory. There’s still plenty of time, so you would need to trust your defense.",
        "answers": {
            "1": ["Go For It", "Too risky here! Even if you want to stay aggressive, the odds are low. A failed attempt gives the opponent the ball in field goal range with a chance to score.", False],
            "2": ["Kick", "feedback 2", False],
            "3": ["Punt", "Correct! Smart move – punt it away. You’re ahead, it’s 4th & long and you are deep in your own territory. A failed 4th down would give the opponent a scoring chance from your 28. Punting gives your defense a chance to win the game.", True]
        }
    },
    "3": {
        "question": "Evaluate the following 4th down scenario using field position, distance, score, and time:\nYou are on your opponent’s 37-yard line. It’s 4th & 4. You are tied with 1:10 left in the 4th quarter. You have 2 timeouts. What do you do?",
        "answers": {
            "1": ["Go For It", "feedback 1", False],
            "2": ["Kick", "Clutch kick – right call! With the game tied and little time left, taking the lead matters. A 55-yard kick isn’t easy, but it gives you a chance to win now. If your kicker has the leg, this is the best balance of risk and reward.", True],
            "3": ["Punt", "You gave up a chance to win. With a decent kicker and a tie game, punting from the 37 is too cautious. You’re in range to take the lead. Don’t play for overtime when you can win it now.", False]
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
    return render_template("football101.html")
    
@app.route("/football101-options")
def football101_options():
    return render_template("football101-options.html")

# Terre
@app.route("/learn")
def learn():
    return render_template("learn.html")

# Kat
@app.route("/learn/field-position")
def learn_field_position():
    return render_template("fieldposition.html")

# Dany
@app.route("/learn/yards-to-go")
def learn_yards_to_go():
    return render_template("yardstogo.html")

# Connor
@app.route("/learn/time-score")
def learn_time_score():
    return render_template("learn_time_score.html")

# Terre
@app.route("/learn/timeouts")
def timeouts():
    return render_template("timeouts_stage1.html")

@app.route("/learn/timeouts/try-again")
def timeout_step2():
    return render_template("timeouts_stage2.html")

# Connor
@app.route("/summary")
def summary():
    return render_template("summary.html")

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

    if id=="1":
        url = url_for('static', filename='images/quiz_scoreboard_1.png')
    elif id=="2":
        url = url_for('static', filename='images/quiz_scoreboard_2.png')
    else:
        url = url_for('static', filename='images/quiz_scoreboard_3.png')

    return jsonify({"question": result, "image": url})

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

import os

@app.route("/debug-templates")
def debug_templates():
    templates_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'templates')
    files = os.listdir(templates_path)
    return "<br>".join(files)

if __name__ == "__main__":
    app.run(debug=True)
