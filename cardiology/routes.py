from flask import render_template, redirect, url_for, Flask, request
from flask_sqlalchemy import SQLAlchemy
from cardiology.models import Doctors, Patients, Admins, Appointemets, Medical_records
from cardiology import app, db
from datetime import datetime

f = False
p_user = 0
day = 0
doc = 0
medicl_record = 0
# doctors = Doctors.query.all()

# app = Flask(__name__)
# db = SQLAlchemy(app)
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///cardiology.db'


@app.route('/')
@app.route('/patient')
def patient_page():
    global p_user,  f
    f = False
    
    p_user = Patients.query.filter_by(p_id=1).first()
    return render_template('patient.html', user=p_user)



@app.route('/home')
def home_page():
    global p_user, f
    f = False
    
    return render_template('home.html', user=p_user)


@app.route('/book_appointment',  methods=['POST', 'GET'])
def book_page():
    global p_user, f, doc, day
    doctors = Doctors.query.all()
    
    if request.method == 'POST': 
        if not f:
            
            
            day = request.form['day']
            doc = Doctors.query.filter_by(d_id=request.form['doctors']).first()
        if f :
            f =False
            hour = request.form['Time']
            p_time = parse_time(day, hour)        
            appoint = Appointemets(p_id=p_user.p_id, p_name=p_user.p_name, d_name = doc.d_name, d_id = doc.d_id, appointemet=p_time)
            db.session.add(appoint)
            db.session.commit()
            return render_template('booking.html', user=p_user, docs=doctors, flag=f , t=t)
        else:
            f = True
        
    return render_template('booking.html', user=p_user, docs=doctors, flag=f , t=t)


@app.route('/contact', methods=['POST', 'GET'])
def contact_page():
    global p_user, f
    f = False
   
    if request.method == 'POST':
        c = request.form['c']
        return render_template('contact.html', user=p_user)

    return render_template('contact.html', user=p_user)


@app.route('/medical_records')
def medical_records_page():
    global p_user, medicl_record, f
    f = False
    
    medicl_record = Medical_records.query.filter_by(p_id = p_user.p_id)
    return render_template('MedicalRecord.html', user=p_user, record = medicl_record)


@app.route('/Perscription')
def Perscription_page():
    
    global p_user, medicl_record, f
    f = False
   
    return render_template('Perscription.html', user=p_user, record = medicl_record)



@app.route('/register')
def reg_page():

    return render_template('Register.html')



def parse_time(day, time):

    d = day.split('-')
    t= time.split('-')
    x = datetime(int(d[0]), int(d[1]), int(d[2]), int(t[0]), int(t[1]))
    return x

    