import os
from flask import Flask, session, request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

#load main config
app.config.from_pyfile('../config.py') 
db = SQLAlchemy(app)


import my_app.views
from my_app.models import Login

db.create_all()
l = Login(email="admin@helperview.com", password="12345678")
db.session.add(l)
db.session.commit()