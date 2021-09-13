from flask_app import app
from flask import render_template, redirect, session, request

from flask_app.models.dojo import Dojo
from flask_app.models.ninja import Ninja


@app.route("/dojo")
def dojo():

    return render_template("dojo.html")


@app.route('/new_dojo', methods=['POST'])
def new_dojo():
    data = {
        "name": request.form["name"]
    }

    Dojo.create_dojo(data)

    return redirect("/dojo")


@app.route('/ninja')
def ninja():
    dojo = Dojo.get_all_dojos()

    return render_template("ninja.html", dojo=dojo)


@app.route('/create_ninja', methods=['POST'])
def create_ninja():
    data = {
        "first_name": request.form['first_name'],
        "last_name": request.form['last_name'],
        "age": request.form['age'],
        "dojo_id": request.form['dojo_id']
    }

    Ninja.create_ninja(data)

    return redirect("/dojo")
