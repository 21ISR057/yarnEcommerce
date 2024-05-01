$(document).ready(function() {
    $("#submitBtn").click(function() {
        if (validateForm()) {
            window.location.href = "regsuc.html";
        }
    });
});
$(document).ready(function() {
        $("#fullName").on("input", function() {
            validateFullName($(this).val());
        });
    });
$(document).ready(function() {
        $("#email").on("input", function() {
            validateEmail($(this).val());
        });
    });

$(document).ready(function() {
        $("#loanAmount").on("input", function() {
            var isFormValid = validateForm();
            validateLoanAmount($(this).val());
        });
    });


function validateForm() {
    var fullName = $("#fullName").val();
    var email = $("#email").val();
    var phoneNumber = $("#phoneNumber").val();
    var loanAmount = $("#loanAmount").val();

    var isValid = true;
    $("#errorDiv").empty(); // Clear previous error messages

    if (fullName.trim() === "") {
        showError("Full Name is required");
        isValid = false;
    }

    if (!isValidEmail(email)) {
        showError("Invalid email address");
        isValid = false;
    }
    if (phoneNumber.trim() === "" || phoneNumber.length !== 10 || isNaN(phoneNumber)) {
        showError("Invalid phone number");
        isValid = false;
    }
    if (isNaN(loanAmount) || loanAmount < 3) {
        showError("Invalid loan amount");
        isValid = false;
    }
    return isValid;
}

function showError(message) {
    $("#errorDiv").append("<p class='error'>" + message + "</p>");
}

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}