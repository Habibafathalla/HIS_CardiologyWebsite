from flask import render_template, redirect, url_for, Flask
from flask_sqlalchemy import SQLAlchemy
from modeles import User



app = Flask(__name__)
# db = SQLAlchemy(app)

#@app.route('/')
@app.route('/')
def home_page():
    return '<h1> Home Page <h1\>'

# if __name__ == '__main__':
    # app.run(debug=True)
