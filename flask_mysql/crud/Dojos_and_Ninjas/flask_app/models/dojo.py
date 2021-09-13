from flask_app.config.mysqlconnection import connectToMySQL

from flask_app.models import ninja

class Dojo:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

        self.ninjas = []

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

    @classmethod
    def get_one_dojo(cls, data):
        query = "SELECT * FROM dojos LEFT JOIN ninjas ON dojo_id = dojos.id WHERE dojos.id = %(id)s;"
    
        results = connectToMySQL('Dojos_and_Ninjas').query_db(query, data)

        dojo = cls(results[0])
        for row in results:
            ninja_data = {
                "id" : row["ninjas.id"],
                "first_name" : row["first_name"],
                "last_name" : row["last_name"],
                "age" : row["age"],
                "created_at" : row["ninjas.created_at"],
                "updated_at" : row["ninjas.updated_at"],
                "dojo_id" : row["dojo_id"],
            }
            dojo.ninjas.append( ninja.Ninja( ninja_data ) )
        return dojo