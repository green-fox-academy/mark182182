from flask import Flask, render_template, request, jsonify
import MySQLdb as MySQL
import AdvancedHTMLParser

app = Flask(__name__)
parser = AdvancedHTMLParser.AdvancedHTMLParser()

@app.route("/")
def temp():
    db = MySQL.connect("localhost", "root", "hello", "quiz")
    cur = db.cursor()
    query = "SELECT * FROM questions"
    cur.execute(query)
    parser.parseFile('./templates/index.html')
    print(parser.getElementById('head-title'))
    return jsonify(data=cur.fetchall())

app.run(debug=True)