from flask import render_template, redirect, url_for,Flask
from flask_sqlalchemy import SQLAlchemy
from routes import app

db = SQLAlchemy(app)


if __name__ == '__main__':
    app.run(debug=True)
    