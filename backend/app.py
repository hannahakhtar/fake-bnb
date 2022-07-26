from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/", methods=["GET"])
def hello_world():
    return { 'message': 'Product deleted successfully' }

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000, debug=True)
    # run command to kill 5000 (use process ID) and change to 5000