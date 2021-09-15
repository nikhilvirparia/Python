from flask_app import app
from flask import render_template, redirect, session, request, flash

from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)

from flask_app.models.user import User

@app.route("/")
def index():

    return render_template("index.html")


@app.route("/register", methods=['POST'])
def register():

    # validate user
    if not User.validate_register(request.form):
        return redirect("/")

    pw_hash = bcrypt.generate_password_hash(request.form['password'])

    data = {
        "first_name": request.form['first_name'],
        "last_name": request.form['last_name'],
        "email": request.form['email'],
        "password": pw_hash
    }

    # Call the save @classmethod on User
    user_id = User.register_user(data)

    # store user id into session
    session['user_id'] = user_id
    return redirect("/dashboard")
