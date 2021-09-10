from flask import Flask, render_template, redirect, session, request

# import the class from friend.py
from user import User
app = Flask(__name__)


@app.route("/users")
def index():
    # call the get all classmethod to get all friends
    users = User.get_all()
    print(users)
    return render_template("users.html", users = users)

@app.route("/users/new")
def new():
    return render_template("new.html")


@app.route("/add_user", methods=['POST'])
def add():

    data = {
        "first_name": request.form["first_name"],
        "last_name" : request.form["last_name"],
        "email" : request.form["email"]
    }

    User.add_user(data)

    return redirect("/users")

if __name__ == "__main__":
    app.run(debug=True)
