from flask import Flask  # Import Flask to allow us to create our app
from flask import Flask, render_template  # added render_template!

# Create a new instance of the Flask class called "app"
app = Flask(__name__)


@app.route('/')
def index():
    return render_template("index.html", row=8, col=8, color_one='red', color_two='blue')


@app.route('/<int:x>')
def row(x):
    return render_template("index.html", row=x, col=8, color_one='red', color_two='blue')


if __name__ == "__main__":   # Ensure this file is being run directly and not from a different module
    app.run(debug=True)    # Run the app in debug mode.