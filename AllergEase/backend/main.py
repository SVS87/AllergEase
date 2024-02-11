from flask import Flask, jsonify, request
from flask_cors import CORS
import openai
import json
import re
import random
import requests
import nltk
from sklearn.feature_extraction.text import TfidfVectorizer
from nltk.tokenize import sent_tokenize

nltk.download('stopwords')
nltk.download('punkt')
key = "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"



app = Flask(__name__)
CORS(app)

app.route("/")
def home():
    return jsonify({"hello": "welcome to the api"})

@app.route("/symptoms", methods=['POST'])
#json form = {"symptoms":___symptoms____}
def symptoms():
    content_type = request.headers.get('Content-Type')
    print(content_type)
    if(content_type == "application/json"):

        jso = request.get_json()
        print(jso)

        headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + key,
            }

        json_data = {
            'model': 'gpt-3.5-turbo',
            'messages': [
                {
                    'role': 'user',
                    'content': "I think I may be having an allergic reaction to something. My symptoms are as follows, along with my known allergies and anything new or uncertain that I have eaten recently (if I have): /n " + jso.get("symptoms") + "Please let me know if I am truly having an allergic reaction, based on what is known regarding my allergies",
                },
            ],
            'temperature': 0.7,
        }
        response = requests.post('https://api.openai.com/v1/chat/completions',headers=headers,json=json_data)
        response = json.loads(response.text)

        t = response.get("choices")[0].get("message").get("content")
        return jsonify({"comments":t})
        
    else:
        return "error"


if __name__ == '__main__':
    app.run(host="0.0.0.0",port=random.randint(2000, 9000))