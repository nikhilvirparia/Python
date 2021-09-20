from flask_app import app
from flask_app.models.recipe import Recipe
from flask_app.models.user import User
from flask import render_template, redirect, session, request, flash
from datetime import date

from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)


# ============================
# Recipe Route
# ============================

@app.route("/dashboard")
def dashboard():
    if not 'user_id' in session:
        return redirect("/")

    data = {
        "user_id": session['user_id']
    }

    user = User.get_user_info(data)
    all_recipes = Recipe.get_all_recipes()

    return render_template("dashboard.html", user=user, recipes=all_recipes)

# ============================
# Instructions Recipe Route
# ============================


@app.route("/recipes/<int:id>")
def recipes_instruction(id):
    if not 'user_id' in session:
        return redirect("/")

    # ID is saved, and return the main
    data = {
        "id": id,
        "user_id": session['user_id']
    }

    user = User.get_user_info(data)
    one_recipe = Recipe.get_one_recipe(data)

    return render_template("view.html", recipe=one_recipe, user=user)

# ============================
# Add New Recipe Route (get from the Form ) (post from the Form)
# ============================


@app.route("/recipes/new")
def add_recipe():

    today = date.today()
    user_id = session['user_id']
    return render_template("add.html", today=today, user_id=user_id)


@app.route("/recipes/create", methods=["POST"])
def create_recipe():

    # validate Recipe
    if not Recipe.validate_recipe(request.form):
        return redirect("/recipes/new")
    
    data = {
        "user_id": session['user_id'],
        "name": request.form['name'],
        "description": request.form['description'],
        "instructions": request.form['instructions'],
        "date_made": request.form['date_made'],
        "thirty_mins": request.form['thirty_mins']
    }

    # Call the save @classmethod on User
    Recipe.create_recipe(data)

    return redirect("/dashboard")

# ============================
# Edit Recipe Route
# ============================
@app.route("/recipes/edit/<int:recipe_id>/")
def edit_instruction(recipe_id):
    today = date.today()

    if not 'user_id' in session:
        return redirect("/")

    # ID is saved, and return the main
    data = {
        "id": recipe_id,
        "user_id": session['user_id']
    }

    user = User.get_user_info(data)
    one_item = Recipe.get_one_recipe(data)

    return render_template("edit.html", user=user, recipes=one_item, today=today)

@app.route('/update/recipe',methods=['POST'])
def update_recipes():
    if 'user_id' not in session:
        return redirect('/logout')

    if not Recipe.validate_recipe(request.form):
        return redirect("/recipes/edit/")
        
    data = {
        "recipes_id": request.form["recipes_id"],
        "name": request.form["name"],
        "description": request.form["description"],
        "instructions": request.form["instructions"],
        "date_made": request.form["date_made"],
        "thirty_mins": request.form["thirty_mins"],
    }
    
    Recipe.update_recipes(data)
    return redirect('/dashboard')
    
# ============================
# Delete Recipe Route
# ============================

@app.route('/recipes/delete/<int:id>')
def delete_recipes(id):
    data = {
        'id': id
    }

    Recipe.delete_recipes(data)

    return redirect('/dashboard')

