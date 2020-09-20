from my_app import db

class Login(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	email = db.Column(db.String(100))
	password = db.Column(db.String(500))

class candidateLogin(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	email = db.Column(db.String(100))
	password = db.Column(db.String(500))

class companyLogin(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	email = db.Column(db.String(100))
	password = db.Column(db.String(500))
	name = db.Column(db.String(100))
	ctc = db.Column(db.Integer)
	noi = db.Column(db.Integer)
	tpi = db.Column(db.Integer)

class organizerLogin(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	email = db.Column(db.String(100))
	password = db.Column(db.String(500))