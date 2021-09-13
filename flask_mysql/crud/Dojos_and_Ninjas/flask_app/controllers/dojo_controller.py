from flask_app import app
from flask import render_template, redirect, session, request

from flask_app.models.dojo import Dojo

@app.route("/dojo")
def dojo():

    return render_template("dojo.html")

@app.route('/new_dojo', methods=['POST'])
def new_dojo():
    data = {
        "name" : request.form["name"]
    }

    Dojo.create_dojo(data)

    return redirect("/dojo")