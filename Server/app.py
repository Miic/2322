
from flask_cors import CORS
from flask import Flask, Response, jsonify

app = Flask(__name__)
CORS(app)

dummy_data = [ {'id': 0, 'question': "Question from server?",
        'answer1': "Good", 'answer2': "Bad",
        'imageUrl':"/assets/car.png",
        'answer1Votes':0, 'answer2Votes':0},
    {'id': 1, 'question': "Which has the better mane?",
        'answer1': "Lion", 'answer2': "Horse",
        'imageUrl':"/assets/lion.png",
        'answer1Votes':0, 'answer2Votes':0},
    {'id': 2, 'question': "Which is faster?", 'answer1': "Cheetah",
        'answer2': "Car", 'imageUrl':"/assets/cheetah.png",
        'answer1Votes':0, 'answer2Votes':0},
    {'id': 3, 'question': "Which bird has the heavier legs?",
        'answer1': "Turkey", 'answer2': "Ostrich",
        'imageUrl':"/assets/ostrich.png",
        'answer1Votes':0, 'answer2Votes':0}]

@app.route('/')
def hello_world():
    return 'Yup, service running'

@app.route('/api/reactions', methods=['GET'])
def get_reactions():
    resp = jsonify(dummy_data)
    return resp


if __name__ == '__main__':
    app.run()
