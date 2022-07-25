from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, Test!</p>"

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=8000, debug=True)
    # run command to kill 5000 (use process ID) and change to 5000