from flask import request
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

@app.route('/api/reactions', methods=['POST'])
def add_reaction():
    dummy_data.append(request.json)
    print(f'Adding reaction {request.json}')
    return jsonify(dummy_data)

@app.route('/api/reactions/<rId>', methods=['DELETE'])
def remove_reaction(rId):
    rId = int(rId)
    print(f'Removing reaction id {rId}')
    dummy_data[:] = [r for r in dummy_data if r.get('id') != rId]
    return jsonify(dummy_data)

# @app.route('/api/user/<user_id>', methods=['GET'])
# def get_user(user_id):
#     user_id = int(user_id)
#     if user_id in dummy_users:
#         js = json.dumps(dummy_users[user_id])
#         resp = Response(js, status=200, mimetype='application/json')
#         return resp
#     else:
#         print(f"User id:{user_id} not found")
#         abort(404, 'User id not found')


if __name__ == '__main__':
    app.run()
