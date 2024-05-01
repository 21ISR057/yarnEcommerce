class DisplayFormData {
    private nameElement: HTMLElement | null;
    private emailElement: HTMLElement | null;
    private phoneElement: HTMLElement | null;
    private messageElement: HTMLElement | null;

    constructor() {
        this.nameElement = document.getElementById("name");
        this.emailElement = document.getElementById("email");
        this.phoneElement = document.getElementById("phone");
        this.messageElement = document.getElementById("message");

        this.displayFormData();
    }

    private displayFormData(): void {
        const params = new URLSearchParams(window.location.search);

        if (this.nameElement && this.emailElement && this.phoneElement && this.messageElement) {
            if (params.has("name") && params.has("email") && params.has("phone") && params.has("message")) {
                this.nameElement.innerText = params.get("name") || "No data found";
                this.emailElement.innerText = params.get("email") || "No data found";
                this.phoneElement.innerText = params.get("phone") || "No data found";
                this.messageElement.innerText = params.get("message") || "No data found";
            } else {
                this.nameElement.innerText = "No data found";
                this.emailElement.innerText = "No data found";
                this.phoneElement.innerText = "No data found";
                this.messageElement.innerText = "No data found";
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    new DisplayFormData();
});
