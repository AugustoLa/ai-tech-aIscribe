from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import openai
from dotenv import load_dotenv, find_dotenv
from openai import ChatCompletion

# DOTENV
load_dotenv(find_dotenv())
openai.api_key = os.getenv("OPEN_AI_KEY")

# FLASK

app = Flask(__name__)
CORS(app)


@app.route("/api", methods=["POST"])
def gpt3():
    data = request.get_json()
    message = data["message"]
    response = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[{"role": "system", "content": message}],
    max_tokens=3000,
    temperature=1.0,
)
    if response and 'choices' in response:
        messages = response['choices'][0]['message']['content']
        print(messages)
        return jsonify({'message': messages})


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=9000, debug=True)
