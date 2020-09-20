# Views at the end of Workshop 2

from my_app import app, db
from flask import render_template, request, redirect
from my_app.models import candidateLogin, companyLogin, organizerLogin, Login

name="success"
new_login = Login(email="", password="")

@app.route("/signuppage")
def signup():
    return render_template("signup.html")

@app.route("/candidatepage")
def candidatepage():
    return render_template("candidatelogin.html")

@app.route("/companypage")
def companypage():
    global new_login
    db_company = companyLogin.query.all()
    for details in db_company:
        if details.email == new_login.email and details.password == new_login.password:
            return render_template("companylogin.html", namec=details.name, noi=details.noi, tpi=details.tpi)

@app.route("/organizerpage")
def organizerpage():
    return render_template("orgilogin.html")

@app.route("/failpage")
def failpage():
    global name
    name = "failed"
    return render_template("mainpage.html", name=name)

@app.route("/successpage")
def successpage():
    return render_template("successpage.html")

@app.route("/")
def index():
    return render_template("mainpage.html", name=name)

@app.route("/click", methods=["POST"])
def click():
    return "okay"

@app.route("/login", methods=["POST"])
def login():
    if request.method == "POST":
        db_logins_candidate = candidateLogin.query.all()
        db_logins_company = companyLogin.query.all()
        db_logins_organizer = organizerLogin.query.all()
        login_info = request.get_json()
        global new_login
        new_login = Login(email=login_info['email'], password=login_info['password'])
        
        x = 0
        for loginval in db_logins_candidate:
            if new_login.email == loginval.email and new_login.password == loginval.password:
                x = 1
        for loginval in db_logins_company:
            if new_login.email == loginval.email and new_login.password == loginval.password:
                x = 2
        for loginval in db_logins_organizer:
            if new_login.email == loginval.email and new_login.password == loginval.password:
                x = 3
        if x == 1:
            return "candidate"
        elif x == 2:
            return "company"
        elif x == 3:
            return "organizer"
        else:
            return "notokay"
