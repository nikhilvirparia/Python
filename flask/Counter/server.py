# added render_template!
from flask import Flask, render_template, request, redirect, session

# Create a new instance of the Flask class called "app"
app = Flask(__name__)
# set a secret key for security purposes
app.secret_key = 'keep it secret, keep it safe'


@app.route('/')
def index():
    if 'counter' in session:
        session['counter'] += 1
    else:
        session['counter'] = 0
    
    return render_template("index.html", counter=session['counter'])

@app.route('/destroy_session')
def destroy_session():
    session.clear()		# clears all keys
    return redirect('/')

@app.route('/process', methods=['POST'])
def form():
    if "plustwo" in request.form:
            session['counter'] += 1
    else:
            session.clear()
    return redirect("/")




if __name__ == "__main__":   # Ensure this file is being run directly and not from a different module
    app.run(debug=True)    # Run the app in debug mode.
