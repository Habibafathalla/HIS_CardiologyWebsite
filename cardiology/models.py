from cardiology import db

class Doctors(db.Model):

    d_id = db.Column(db.Integer(), primary_key=True)
    d_username = db.Column(db.String(length=30), nullable=False, unique=True)
    d_password = db.Column(db.String(length=60), nullable=False)
    d_name = db.Column(db.String(), nullable=False)
    d_email = db.Column(db.String(length=50), nullable=False, unique=True)
    d_phone = db.Column(db.String(length=11), nullable=False)
    d_birth_date = db.Column(db.Integer(), nullable=False)
    d_sex = db.Column(db.String(), nullable=False)
    d_salary = db.Column(db.Float())
    d_workperiod = db.Column(db.String())
    d_position = db.Column(db.String())



class Admins(db.Model):

    a_id = db.Column(db.Integer(), primary_key=True)
    a_username = db.Column(db.String(length=30), nullable=False, unique=True)
    a_password = db.Column(db.String(length=60), nullable=False)
    a_name = db.Column(db.String(), nullable=False)
    a_email = db.Column(db.String(length=50), nullable=False, unique=True)


# parient1=Patients(p_username='jojo', p_password='jeje', p_name='jojo abo jeje', p_email='jojo@gmail.com', p_phone='0102526248', p_birth_date='12-12-2012', p_sex='male')
class Patients(db.Model):
    
    p_id = db.Column(db.Integer(), primary_key=True)
    p_username = db.Column(db.String(length=30), nullable=False, unique=True)
    p_password = db.Column(db.String(length=60), nullable=False)
    p_name = db.Column(db.String(), nullable=False)
    p_email = db.Column(db.String(length=50), nullable=False, unique=True)
    p_phone = db.Column(db.String(length=11), nullable=False)
    p_birth_date = db.Column(db.Integer(), nullable=False)
    p_sex = db.Column(db.String(), nullable=False)
    

class Appointemets(db.Model):
    
    appointemet_number = db.Column(db.Integer(), primary_key=True)
    p_id = db.Column(db.Integer(), db.ForeignKey('patients.p_id'))
    p_name = db.Column(db.String(), db.ForeignKey('patients.p_name'))
    d_name = db.Column(db.String(), db.ForeignKey('doctors.d_name')) 
    appointemet = db.Column(db.String(), nullable=False)



class Medical_records(db.Model):

    mr_number = db.Column(db.Integer(), primary_key=True)
    p_id = db.Column(db.Integer(), db.ForeignKey('patients.p_id'))
    p_name = db.Column(db.String(), db.ForeignKey('patients.p_name'))
    d_name = db.Column(db.String(), db.ForeignKey('doctors.d_name'))   
    diagnosis = db.Column(db.String(), nullable=False)
    drug = db.Column(db.String(), nullable=False)
    diseases_history = db.Column(db.String())
    restricted_drugs = db.Column(db.String())



