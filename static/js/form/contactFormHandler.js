export const bindContactFormHandler = () => {
    const contactForm = document.getElementById('ContactForm');

    if(contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
}

/**
 * Process the form event.
 */
const handleContactForm = (event) => {
    event.preventDefault();

    validateInput();

    toggleLoading();

    sendFormData(event);
}

/**
 * Validates if inputs are all filled out.
 */
const validateInput = () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!(name && email && message)) {
        onFormError('Make sure to fill in the required fields.')
    }
}

/**
 * Handles error case.
 */
const onFormError = (message) => {
    const errorMessage = document.getElementById('FormError');
    const indicator = document.querySelector('.form__loadingindicator');

    errorMessage.innerHTML = message;

    errorMessage.classList.remove('hide');

    indicator.classList.add('hide');
}

/**
 * Sends data to Formspree.
 */
const sendFormData = async (event) => {
    const form = document.getElementById('ContactForm');
    const data = new FormData(event.target);

    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then((response) => {
        if (response.ok) {
            onFormSuccess();        
        } else {
            throw 'error';
        }
    }).catch((e) => {
        onFormError("Sorry! There was a problem submitting your form.");
    });
}

/**
 * Handles state when form is loading.
 */
const toggleLoading = () => {
    const indicator = document.querySelector('.form__loadingindicator');
    const submitButton = document.getElementById('submit');

    indicator.classList.toggle('hide');
    submitButton.classList.toggle('hide');
}

/**
 * Handles case when submit is successful.
 */
const onFormSuccess = () => {
    const successMessage = document.getElementById('FormSuccessMessage');
    const form = document.getElementById('ContactForm');

    successMessage.innerHTML = 'Thanks for reaching out, I will answer asap :)';
    successMessage.classList.remove('hide');

    form.reset();
    toggleLoading();
}