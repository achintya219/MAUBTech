$(document).ready(function() {
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
                    window.location = "/homepage";
                else
                    window.location = "/failpage";
            }
        });

    });
});