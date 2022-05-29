from flask import render_template, redirect, url_for,Flask
from flask_sqlalchemy import SQLAlchemy
from cardiology import app
from cardiology import db


# db = SQLAlchemy(app)
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///cardiology.db'

if __name__ == '__main__':
    app.run(debug=True)
    
    