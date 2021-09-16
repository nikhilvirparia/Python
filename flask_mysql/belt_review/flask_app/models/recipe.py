from flask_app import app
from flask import flash
from flask_app.config.mysqlconnection import connectToMySQL

from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)

class Recipe:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.description = data['description']
        self.instructions = data['instructions']
        self.date_made = data['date_made']
        self.thirty_mins = data['thirty_mins']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.user_id = data['user_id']

    @classmethod
    def get_all_recipes(cls):
        query = "SELECT * FROM recipes;"
        results = connectToMySQL('Recipes').query_db( query )
        recipes = []
        for recipe in results:
            recipes.append(cls(recipe))
        return recipes
    
    @classmethod
    def get_one_recipe(cls, data):
        query = "SELECT * FROM recipes WHERE id = %(id)s;"
        results = connectToMySQL('Recipes').query_db( query, data )
        return cls(results[0])
    
    @classmethod
    def create_recipe(cls, data):
        query = "INSERT INTO recipes (name, description, instructions, date_made, thirty_mins, created_at, updated_at, user_id) VALUES (%(name)s, %(description)s, %(instructions)s, %(date_made)s, %(thirty_mins)s, NOW(), NOW(), %(user_id)s);"

        return connectToMySQL('Recipes').query_db( query, data )