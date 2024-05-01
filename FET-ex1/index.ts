class ContactForm {
    private form: HTMLFormElement;
    private inputs: NodeListOf<HTMLInputElement>;
    private textarea: HTMLTextAreaElement;

    constructor() {
        this.form = document.querySelector('form') as HTMLFormElement;
        this.inputs = document.querySelectorAll('.input') as NodeListOf<HTMLInputElement>;
        this.textarea = document.querySelector('textarea') as HTMLTextAreaElement;

        this.setupListeners();
    }

    private setupListeners() {
        this.inputs.forEach(input => {
            input.addEventListener('focus', () => this.toggleLabelActive(input));
            input.addEventListener('blur', () => this.toggleLabelActive(input));
            this.toggleLabelActive(input);
        });

        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    private toggleLabelActive(input: HTMLInputElement) {
        const label = input.nextElementSibling as HTMLElement;
        if (input.value.trim() !== '') {
            label.classList.add('active');
        } else {
            label.classList.remove('active');
        }
    }

    private handleSubmit(event: Event) {
        event.preventDefault();

        const name = (document.querySelector('input[name="name"]') as HTMLInputElement).value;
        const email = (document.querySelector('input[name="email"]') as HTMLInputElement).value;
        const phone = (document.querySelector('input[name="phone"]') as HTMLInputElement).value;
        const message = this.textarea.value;

        if (name.trim() === '' || email.trim() === '' || phone.trim() === '' || message.trim() === '') {
            alert('Please fill in all fields');
            return;
        }

        const formData = {
            name,
            email,
            phone,
            message
        };

        console.log(formData);

        this.form.reset();
        this.inputs.forEach(input => this.toggleLabelActive(input));
    }
}

const contactForm = new ContactForm();
