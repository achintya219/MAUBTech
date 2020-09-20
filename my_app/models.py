from my_app import db

class Login(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	email = db.Column(db.String(100))
	password = db.Column(db.String(500))