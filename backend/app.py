from flask import Flask, request, jsonify


app = Flask(__name__)


@app.route("/")
def index():
    return "Hello, Flask!"


@app.route("/api/data", methods=["POST"])
def process_data():
    data = request.json
    # Processar os dados recebidos
    response = {"message": "Data processed successfully"}
    return jsonify(response)


if __name__ == "__main__":
    app.run()
