from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///cardiology.db'
db = SQLAlchemy(app)

from cardiology.models import Doctors , Admins, Patients, Appointemets, Medical_records 
from cardiology import routes