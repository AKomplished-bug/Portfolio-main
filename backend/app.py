# backend/app.py

from flask import Flask, request, jsonify
from flask_cors import CORS
from bot import get_response

app = Flask(__name__)
CORS(app)

@app.route('/api/chat', methods=['POST'])
def chat():
    data = request.json
    query = data.get('query')
    if not query:
        return jsonify({"error": "No query provided"}), 400
    
    response = get_response(query)
    return jsonify({"response": response})

if __name__ == '__main__':
    app.run(debug=True)