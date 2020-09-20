$(document).ready(function() {
    `
    $("#clogin-button").click(function() {
        const url = "http://localhost:5000/click";

        $.ajax({
            url: url,
            type: "POST",
            //data: JSON.stringify(loginInfo),
            processData: false,
            contentType: "application/json; charset=UTF-8",
            success: function(result) {
                console.log("request complete!");
                if (result=="okay")
                    window.location = "/candidatelogin";
                else
                    window.location = "/failpage";
            }
        });

    });

    $("#cologin-button").click(function() {
        const url = "http://localhost:5000/click";

        $.ajax({
            url: url,
            type: "POST",
            //data: JSON.stringify(loginInfo),
            processData: false,
            contentType: "application/json; charset=UTF-8",
            success: function(result) {
                console.log("request complete!");
                if (result=="okay")
                    window.location = "/companylogin";
                else
                    window.location = "/failpage";
            }
        });

    });

    $("#orgilogin-button").click(function() {
        const url = "http://localhost:5000/click";

        $.ajax({
            url: url,
            type: "POST",
            //data: JSON.stringify(loginInfo),
            processData: false,
            contentType: "application/json; charset=UTF-8",
            success: function(result) {
                console.log("request complete!");
                if (result=="okay")
                    window.location = "/organizerlogin";
                else
                    window.location = "/failpage";
            }
        });

    });`

    $("#login-button").click(function() {
        const url = "http://localhost:5000/login";
        const loginInfo = {
            email: $("#login-email").val(),
            password: $("#login-pass").val()
        };

        $.ajax({
            url: url,
            type: "POST",
            data: JSON.stringify(loginInfo),
            processData: false,
            contentType: "application/json; charset=UTF-8",
            success: function(result) {
                console.log("request complete!");
                if (result=="candidate")
                    window.location = "/candidatepage";
                else if (result=="company")
                    window.location = "/companypage";
                else if (result=="organizer")
                    window.location = "/organizerpage";
                else
                    window.location = "/failpage";
            }
        });
    });

    $("#signup-button").click(function() {
        const url = "http://localhost:5000/click";

        $.ajax({
            url: url,
            type: "POST",
            //data: JSON.stringify(loginInfo),
            processData: false,
            contentType: "application/json; charset=UTF-8",
            success: function(result) {
                console.log("request complete!");
                if (result=="okay")
                    window.location = "/signuppage";
                else
                    window.location = "/failpage";
            }
        });

    });
    
});