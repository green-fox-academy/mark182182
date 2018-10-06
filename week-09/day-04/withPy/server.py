from flask import Flask, render_template, jsonify
import MySQLdb as MySQL
import random

app = Flask(__name__)

@app.route('/')
def get_index():
    return render_template('index.html')

@app.route('/attractions', methods=['GET'])
def get_attractions():
    db = MySQL.connect('localhost', 'root', 'hello', 'AlopexOrientationExam')
    cur = db.cursor()
    cur.execute('SELECT * FROM attractions')
    attractions = jsonify(cur.fetchall())
    return attractions

@app.route('/add', methods=['POST'])
def add_attraction():

app.run(debug=True)