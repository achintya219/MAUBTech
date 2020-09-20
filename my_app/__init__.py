import os
from flask import Flask, session, request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

#load main config
app.config.from_pyfile('../config.py') 
db = SQLAlchemy(app)


import my_app.views
from my_app.models import Login, candidateLogin, companyLogin, organizerLogin

db.create_all()
candidate = candidateLogin(email="candidate@helperview.com", password="candidate")
db.session.add(candidate)
db.session.commit()

db.create_all()
company = companyLogin(email="company@helperview.com", password="company")
db.session.add(company)
db.session.commit()

db.create_all()
organizer = organizerLogin(email="organizer@helperview.com", password="organizer")
db.session.add(organizer)
db.session.commit()