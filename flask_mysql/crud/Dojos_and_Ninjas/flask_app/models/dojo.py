
from flask_app.config.mysqlconnection import connectToMySQL


class Dojo:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def create_dojo(cls, data):
        query = "INSERT INTO dojos (name) VALUES (%(name)s);"

        results = connectToMySQL('Dojos_and_Ninjas').query_db(query, data)

        return results

    @classmethod
    def get_all_dojos(cls):
        query = "SELECT * from dojos;"

        results = connectToMySQL('Dojos_and_Ninjas').query_db(query)

        dojo = []

        for one_dojo in results:
            dojo.append( cls(one_dojo) )
            
        return results