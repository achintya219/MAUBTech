$(document).ready(function() {
    $("#orgilogin-button").click(function() {
        const url = "http://localhost:5000/click";
        `const loginInfo = {
            email: $("#login-email").val(),
            password: $("#login-pass").val()
        };`

        $.ajax({
            url: url,
            type: "POST",
            //data: JSON.stringify(loginInfo),
            processData: false,
            contentType: "application/json; charset=UTF-8",
            success: function(result) {
                console.log("request complete!");
                if (result=="okay")
                    window.location = "/orgilogin";
                else
                    window.location = "/failpage";
            }
        });

    });

    $("#cologin-button").click(function() {
        const url = "http://localhost:5000/click";
        `const loginInfo = {
            email: $("#login-email").val(),
            password: $("#login-pass").val()
        };`

        $.ajax({
            url: url,
            type: "POST",
            //data: JSON.stringify(loginInfo),
            processData: false,
            contentType: "application/json; charset=UTF-8",
            success: function(result) {
                console.log("request complete!");
                if (result=="okay")
                    window.location = "/cologin";
                else
                    window.location = "/failpage";
            }
        });

    });

    $("#orgilogin-button").click(function() {
        const url = "http://localhost:5000/click";
        `const loginInfo = {
            email: $("#login-email").val(),
            password: $("#login-pass").val()
        };`

        $.ajax({
            url: url,
            type: "POST",
            //data: JSON.stringify(loginInfo),
            processData: false,
            contentType: "application/json; charset=UTF-8",
            success: function(result) {
                console.log("request complete!");
                if (result=="okay")
                    window.location = "/orgilogin";
                else
                    window.location = "/failpage";
            }
        });

    });

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
                if (result=="okay")
                    window.location = "/successpage";
                else
                    window.location = "/failpage";
            }
        });
    });
});