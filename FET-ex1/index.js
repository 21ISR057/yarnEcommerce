var ContactForm = /** @class */ (function () {
    function ContactForm() {
        this.form = document.querySelector('form');
        this.inputs = document.querySelectorAll('.input');
        this.textarea = document.querySelector('textarea');
        this.setupListeners();
    }
    ContactForm.prototype.setupListeners = function () {
        var _this = this;
        this.inputs.forEach(function (input) {
            input.addEventListener('focus', function () { return _this.toggleLabelActive(input); });
            input.addEventListener('blur', function () { return _this.toggleLabelActive(input); });
            _this.toggleLabelActive(input);
        });
        this.form.addEventListener('submit', function (e) { return _this.handleSubmit(e); });
    };
    ContactForm.prototype.toggleLabelActive = function (input) {
        var label = input.nextElementSibling;
        if (input.value.trim() !== '') {
            label.classList.add('active');
        }
        else {
            label.classList.remove('active');
        }
    };
    ContactForm.prototype.handleSubmit = function (event) {
        var _this = this;
        event.preventDefault();
        var name = document.querySelector('input[name="name"]').value;
        var email = document.querySelector('input[name="email"]').value;
        var phone = document.querySelector('input[name="phone"]').value;
        var message = this.textarea.value;
        if (name.trim() === '' || email.trim() === '' || phone.trim() === '' || message.trim() === '') {
            alert('Please fill in all fields');
            return;
        }
        var formData = {
            name: name,
            email: email,
            phone: phone,
            message: message
        };
        console.log(formData);
        this.form.reset();
        this.inputs.forEach(function (input) { return _this.toggleLabelActive(input); });
    };
    return ContactForm;
}());
var contactForm = new ContactForm();
