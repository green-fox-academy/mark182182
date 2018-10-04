from flask import Flask, render_template, jsonify
import MySQLdb as MySQL
import random

app = Flask(__name__)

@app.route("/")
def get_index():
    return render_template('index.html')

@app.route("/game", methods=['GET'])
def get_questions():
    random_int = random.randint(1, 5)
    db = MySQL.connect("localhost", "root", "hello", "quiz")
    cur = db.cursor()
    get_answer = cur.execute("SELECT * FROM answers JOIN questions ON answers.question_id = questions.id WHERE question_id = %s", [random_int])
    answers = jsonify(answers=cur.fetchall())
    return answers

app.run(debug=True)