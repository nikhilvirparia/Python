from flask import Flask  # Import Flask to allow us to create our app
from flask import Flask, render_template  # added render_template!

# Create a new instance of the Flask class called "app"
app = Flask(__name__)


@app.route('/')
def success():
    return render_template("index.html", times=0)

# @app.route('/')
# def index():
#     # notice the 2 new named arguments!
#     return render_template("index.html")

#phrase="hello", times=5
# # for a route '/hello/____' anything after '/hello/' gets passed as a variable 'name'
# @app.route('/hello/<name>')
# def hello(name):
#     print(name)
#     return "Hello, " + name


# # for a route '/users/____/____', two parameters in the url get passed as username and id
# @app.route('/users/<username>/<id>')
# def show_user_profile(username, id):
#     print(username)
#     print(id)
#     return "username: " + username + ", id: " + id


if __name__ == "__main__":   # Ensure this file is being run directly and not from a different module
    app.run(debug=True)    # Run the app in debug mode.
