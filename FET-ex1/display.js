var DisplayFormData = /** @class */ (function () {
    function DisplayFormData() {
        this.nameElement = document.getElementById("name");
        this.emailElement = document.getElementById("email");
        this.phoneElement = document.getElementById("phone");
        this.messageElement = document.getElementById("message");
        this.displayFormData();
    }
    DisplayFormData.prototype.displayFormData = function () {
        var params = new URLSearchParams(window.location.search);
        if (this.nameElement && this.emailElement && this.phoneElement && this.messageElement) {
            if (params.has("name") && params.has("email") && params.has("phone") && params.has("message")) {
                this.nameElement.innerText = params.get("name") || "No data found";
                this.emailElement.innerText = params.get("email") || "No data found";
                this.phoneElement.innerText = params.get("phone") || "No data found";
                this.messageElement.innerText = params.get("message") || "No data found";
            }
            else {
                this.nameElement.innerText = "No data found";
                this.emailElement.innerText = "No data found";
                this.phoneElement.innerText = "No data found";
                this.messageElement.innerText = "No data found";
            }
        }
    };
    return DisplayFormData;
}());
document.addEventListener("DOMContentLoaded", function () {
    new DisplayFormData();
});
