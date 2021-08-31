# Change the value 10 in x to 15. Once you're done, x should now be [ [5,2,3], [15,8,9]].
x = [[5, 2, 3], [10, 8, 9]]
x[1][0] = 15
print(x)
print(' ')

# Change the last_name of the first student from 'Jordan' to 'Bryant'
students = [
    {'first_name': 'Michael', 'last_name': 'Jordan'},
    {'first_name': 'John', 'last_name': 'Rosales'}
]

students[0]['last_name'] = 'Bryant'
print(students)
print(' ')

# In the sports_directory, change 'Messi' to 'Andres'
sports_directory = {
    'basketball': ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer': ['Messi', 'Ronaldo', 'Rooney']
}

sports_directory['soccer'][0] = 'Andres'
print(sports_directory)
print(' ')

# Change the value 20 in z to 30
z = [
    {'x': 10, 'y': 20}
    ]

z[0]['y'] = 30
print(z)
print(' ')

def iterateDictionary(some_list):
    for x in some_list:
        print(f'first_name - {x["first_name"]}, last_name - {x["last_name"]}')
    print(' ')

students = [
    {'first_name': 'Michael', 'last_name': 'Jordan'},
    {'first_name': 'John', 'last_name': 'Rosales'},
    {'first_name': 'Mark', 'last_name': 'Guillen'},
    {'first_name': 'KB', 'last_name': 'Tonel'}
]
iterateDictionary(students)


# Create a function iterateDictionary2(key_name, some_list) that, given a list of dictionaries and a key name,
# the function prints the value stored in that key for each dictionary. For example, iterateDictionary2('first_name',
# students) should output:

def iterateDictionary2(key_name, some_list):
    for x in some_list:
        print(x[key_name])
    print(' ')


iterateDictionary2("first_name", students)
iterateDictionary2("last_name", students)


# Create a function printInfo(some_dict) that given a dictionary whose values are all lists, prints the name of each
# key along with the size of its list, and then prints the associated values within each key's list. For example:


def printInfo(some_dict):
    for x in some_dict:
        print(len(some_dict[x]), x.upper())
        for y in some_dict[x]:
            print(y)
        print(' ')

dojo = {
    'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
    'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}

printInfo(dojo)
