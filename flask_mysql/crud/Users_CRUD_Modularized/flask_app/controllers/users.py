from flask_app import app
from flask import render_template,redirect,request,session,flash
from flask_app.models.user import User

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

@app.route("/users/<int:id>")
def user(id):
    data = {
        "id" : id
    }
    user = User.one_user(data)
    return render_template("show.html", user = user)

@app.route("/users/<int:id>/edit/")
def edit(id):
    data = {
        "id" : id
    }

    user = User.one_user(data)
    return render_template("edit.html", edituser = user)

@app.route("/edituser/<int:id>", methods=['GET','POST'])
def edituser(id):
    print(id)
    data = {
        "id" : id,
        "first_name": request.form["first_name"],
        "last_name" : request.form["last_name"],
        "email" : request.form["email"]
    }
    
    User.edit(data)
    print(data)
    return redirect("/users/" + str(id))

@app.route("/users/<int:id>/delete/")
def delete(id):
    data = {
        "id" : id
    }

    user = User.delete(data)
    return redirect("/users")