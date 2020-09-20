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
            complete: function() {
                console.log("request complete!");
                window.location = "/homepage";
            }
        });

    });
});