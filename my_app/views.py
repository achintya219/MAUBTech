# Views at the end of Workshop 2

from my_app import app, db
from flask import render_template, request, redirect
from my_app.models import Login

name="HelperView"
facts = {"Birthday":"September 18th, 2020", "Favorite Color": "blue", "Favorite Hackathon": "HackMIT"}
posts = []

@app.route("/signuppage")
def signup():
    return render_template("signup.html")
@app.route("/candidatelogin")
def clogin():
    return render_template("candidatelogin.html")

@app.route("/companylogin")
def cologin():
    return render_template("companylogin.html")

@app.route("/organizerlogin")
def orgilogin():
    return render_template("orgilogin.html")

@app.route("/failpage")
def failpage():
    return render_template("failpage.html")

@app.route("/successpage")
def successpage():
    return render_template("successpage.html")

@app.route("/")
def index():
    return render_template("mainpage.html")

@app.route("/click", methods=["POST"])
def click():
    return "okay"

 
@app.route("/login", methods=["POST"])
def login():
    if request.method == "POST":
        db_logins = Login.query.all()
        login_info = request.get_json()
        new_login = Login(email=login_info['email'], password=login_info['password'])
        
        x = 0
        for loginval in db_logins:
            if new_login.email == loginval.email and new_login.password == loginval.password:
                x = 1
        if x == 1:
            return "okay"
        else:
            return "notokay"

