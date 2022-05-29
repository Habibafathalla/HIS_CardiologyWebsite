from flask import render_template, redirect, url_for, Flask
from flask_sqlalchemy import SQLAlchemy
from cardiology.models import Doctors, Patients, Admins, Appointemets, Medical_records
from cardiology import app, db


p_user = 0
d_user = 0
a_user = 0
medicl_record = 0
appointments = 0

# app = Flask(__name__)
# db = SQLAlchemy(app)
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///cardiology.db'


@app.route('/')
@app.route('/patient')
def patient_page():
    global p_user
    p_user = Patients.query.filter_by(p_id=1).first()
    return render_template('patient.html', user=p_user)



@app.route('/home')
def home_page():
    global p_user
    return render_template('home.html', user=p_user)


@app.route('/book_appointment')
def book_page():
    global p_user
    return render_template('booking.html', user=p_user)


@app.route('/contact')
def contact_page():
    global p_user
    return render_template('contact.html', user=p_user)


@app.route('/medical_records')
def medical_records_page():
    global p_user, medicl_record
    medicl_record = Medical_records.query.filter_by(p_id = p_user.p_id)
    return render_template('MedicalRecord.html', user=p_user, record = medicl_record)


@app.route('/Perscription')
def Perscription_page():
    global p_user, medicl_record
    return render_template('Perscription.html', user=p_user, record = medicl_record)