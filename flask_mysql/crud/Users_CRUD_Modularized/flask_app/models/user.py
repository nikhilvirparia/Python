# import the function that will return an instance of a connection
from flask_app.config.mysqlconnection import connectToMySQL
# model the class after the friend table from our database


class User:
    def __init__(self, data):
        self.ID = data['ID']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    # Now we use class methods to query our database
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM Users;"
        results = connectToMySQL('users').query_db(query)
        users = []
        for user in results:
            users.append(cls(user))
        return users

    @classmethod
    def add_user(cls, data):
        query = "INSERT INTO users (first_name, last_name, email, created_at, updated_at) VALUES (%(first_name)s, %(last_name)s, %(email)s, NOW(), NOW())"

        results = connectToMySQL('users').query_db(query, data)
        return results

    # One_user
    @classmethod
    def one_user(cls, data):
        query = "SELECT * FROM users WHERE ID = %(id)s;"
        results = connectToMySQL('users').query_db(query, data)

        return cls(results[0])

    # Update Query
    @classmethod
    def edit(cls, data):
        query = "UPDATE users SET first_name = %(first_name)s, last_name = %(last_name)s, email = %(email)s, updated_at = NOW() WHERE ID=%(id)s;"

        results = connectToMySQL('users').query_db(query, data)
        return results

    # Delete query
    @classmethod
    def delete(cls, data):
        query = "DELETE FROM users WHERE ID = %(id)s"

        results = connectToMySQL('users').query_db(query, data)
        return results
